import WhiskeyForm from '../../components/Whiskey/WhiskeyForm';
import { useAuth } from '../../utils/context/authContext';

const NewWhiskey = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Add New Whiskey</h2>
      <WhiskeyForm user={user} />
    </div>
  );
};

export default NewWhiskey;
