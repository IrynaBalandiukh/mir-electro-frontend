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
      // У разі успішного запиту встановлюємо дані у state для відображення
      setUsers(responseData);
    })
    .catch(error => {
      // У разі невдалого запиту виводимо в консоль помилку
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
