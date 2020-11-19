import React, { Fragment } from 'react';
import { IUser } from '../models';
import UserCard from './UserCard';

interface IProps {
  users: IUser[];
}

const ResultsContainer: React.FC<IProps> = ({ users }) => {
  return (
    <div className='results'>
      {users.map((user: IUser) => (
        <Fragment key={user.id}>
          <UserCard user={user} />
        </Fragment>
      ))}
    </div>
  );
};

export default ResultsContainer;
