import {UserResponse} from 'hybrid-types/MessageTypes';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

const Profile = () => {
  const [user, setUser] = useState<UserResponse['user'] | null>(null);
  const {getUserByToken} = useUser();

  return (
    <>
      <h2>Profile</h2>
      <p>{{user.username}}</p>
      <p>{{user.email}}</p>
      <p>{{user.userlevel}}</p>
      <p>{{user.created_at}}</p>
    </>
  );
};

export default Profile;
