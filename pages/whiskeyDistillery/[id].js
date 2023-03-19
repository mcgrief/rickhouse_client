import WhiskeyDistilleryForm from '../../components/WhiskeyDistillery/WhiskeyDistilleryForm';
import { useAuth } from '../../utils/context/authContext';

const NewWhiskeyDistillery = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Add Whiskey to Distillery</h2>
      <WhiskeyDistilleryForm user={user} />
    </div>
  );
};
export default NewWhiskeyDistillery;
