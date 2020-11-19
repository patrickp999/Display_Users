import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { IUser } from './models';
import ResultsContainer from './components/ResultsContainer';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    Axios.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response: AxiosResponse) => setUsers(response.data));
  }, []);

  return (
    <div className='container'>
      <div className='header'>
        <h1>DISPLAY USERS</h1>
      </div>
      <ResultsContainer users={users} />
    </div>
  );
};

export default App;
