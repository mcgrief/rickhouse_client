import React, { useEffect, useState } from 'react';
import DistilleryCard from '../../components/Distillery/DistilleryCard';
import { getDistilleries } from '../../utils/data/distilleryData';

function Home() {
  const [distilleries, setDistilleries] = useState([]);
  const getContent = () => {
    getDistilleries().then((data) => setDistilleries(data));
  };

  useEffect(() => {
    getContent();
  }, []);
  console.warn(distilleries);
  return (
    <article className="distilleries">
      <h1>Distilleries</h1>
      {distilleries.map((distillery) => (
        <section key={distillery.id} className="distillery">
          <DistilleryCard name={distillery.name} id={distillery.id} whiskey={distillery.whiskey} onUpdate={getContent} />
        </section>
      ))}
    </article>
  );
}

export default Home;
