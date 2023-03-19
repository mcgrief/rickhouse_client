import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import WhiskeyForm from '../../../components/Whiskey/WhiskeyForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleWhiskey } from '../../../utils/data/whiskeyData';

export default function EditWhiskey() {
  const [whiskObj, setEditWhisk] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleWhiskey(id).then(setEditWhisk);
  }, [id]);
  console.error(id, whiskObj);
  return (<WhiskeyForm obj={whiskObj} user={user} />);
}
