import { useEffect, useState } from 'react';

import { User } from '../types/User';
import { getAllUsers } from '../api/users';
import { Users } from '../components/Users/Users';
import { Navigation } from '../components/Navigation/Navigation';

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
    .then(responseData => {
      // If the request is successful, we set the data in state for display
      setUsers(responseData);
    })
    .catch(error => {
      // In the case of an unsuccessful request, we output an error to the console
      console.log(error)
    });
  }, []);

  return (
    <div>
      <Navigation />

      <Users users={users} />
    </div>
  );
};
