import React from 'react';
import { IUser } from '../models';

interface IProps {
  user: IUser;
}

const UserDetails: React.FC<IProps> = ({ user }) => {
  const { email, address, phone, website, company } = user;
  const { street, city, zipcode, geo, suite } = address;
  const { lat, lng } = geo;
  const { name: companyName, catchPhrase, bs } = company;

  return (
    <div className='user-details'>
      <p>EMAIL: {email}</p>
      <p>ADDRESS: {`${street}, ${city}, ${zipcode}`}</p>
      <p>{`${suite}, ${lat} ${lng}`}</p>
      <p>{`${companyName}, ${website}, ${phone}`}</p>
      <p>{`${catchPhrase}, ${bs}`}</p>
    </div>
  );
};

export default UserDetails;
