import { User } from '../../types/User';

import './Users.scss';

type Props = {
  users: User[],
}

export const Users: React.FC<Props> = ({ users }) => {
  return (
    <div className="users">
      {users.length <=0 && <div className="users__message">Here will be a list of all registered users</div>}

      {users.map(user => (
        <div key={user.id} className="users__container">
          <div className="users__name">
            <p>{user.name}</p>
          </div>

          <div className="users__info">
            <p className="users__info-item">{user.email}</p>
            <p className="users__info-item">{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}