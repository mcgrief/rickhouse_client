import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import WhiskeyCard from '../../components/Whiskey/WhiskeyCard';
import { getWhiskey } from '../../utils/data/whiskeyData';

function Home() {
  const router = useRouter();
  const [whiskeys, setWhiskeys] = useState([]);
  const getDrank = () => {
    getWhiskey().then((data) => setWhiskeys(data));
  };
  useEffect(() => {
    getDrank();
  }, []);
  console.warn(whiskeys);
  return (
    <article className="whiskeys">
      <h1>Whiskey</h1>
      <Button
        onClick={() => {
          router.push('/whiskey/new');
        }}
      >
        Add a New Whiskey
      </Button>
      {whiskeys.map((whiskey) => (
        <section key={`whiskey--${whiskey.id}`} className="whiskey">
          <WhiskeyCard id={whiskey.id} label={whiskey.label} distillery={whiskey.distillery} year={whiskey.year} proof={whiskey.proof} type={whiskey.whiskeyType} onUpdate={getDrank} />
        </section>
      ))}
    </article>
  );
}

export default Home;
