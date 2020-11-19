import React, { Fragment, useState } from 'react';
import { IUser } from '../models';
import Button from './Button';
import UserDetails from './UserDetails';

interface IProps {
  user: IUser;
}

const UserCard: React.FC<IProps> = ({ user }) => {
  const { name, username } = user;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Fragment>
      <div className='user-card'>
        <h3 className='user-card--name'>{name}</h3>
        <p className='user-card--user-name'>User Name: {username}</p>
        <div style={{ marginLeft: 'auto' }}>
          <Button buttonText={'Details'} handleClick={handleClick} />
        </div>
      </div>
      {showDetails ? <UserDetails user={user} /> : null}
    </Fragment>
  );
};

export default UserCard;
