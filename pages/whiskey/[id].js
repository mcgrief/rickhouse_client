import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getSingleWhiskey } from '../../utils/data/whiskeyData';

export default function ViewWhiskeyDetail() {
  const [whiskeyDetail, setWhiskeyDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getTheWhiskey = () => {
    getSingleWhiskey(id).then(setWhiskeyDetail);
  };
  useEffect(() => {
    getTheWhiskey();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-black ms-5 details">
        <h5>
          {whiskeyDetail.label}
        </h5>
      </div>
      <Link href={`/whiskeyDistillery/${id}`} passHref>
        <Button size="sm" variant="dark">
          Add to Distillery
        </Button>
      </Link>
    </div>
  );
}
