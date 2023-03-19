import React, { useEffect, useState } from 'react';
import DistilleryCard from '../../components/Distillery/DistilleryCard';
import { getDistilleries } from '../../utils/data/distilleryData';

function Home() {
  const [distilleries, setDistilleries] = useState([]);

  useEffect(() => {
    getDistilleries().then(setDistilleries);
  }, []);

  return (
    <article className="distilleries">
      <h1>Distilleries</h1>
      {distilleries.map((distillery) => (
        <section key={distillery.id} className="distillery">
          <DistilleryCard name={distillery.name} />
        </section>
      ))}
    </article>
  );
}

export default Home;
