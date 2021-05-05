import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Header from '../organisms/Header';
import Main from '../organisms/Main';
import FilterBar from '../organisms/FiltersBar';

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  min-height: 400px;
`;

export default function Dashboard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
    {
      id: 1,
      name: 'Jonathan',
      email: 'jonathand_silva@hotmail.com',
      title: 'Senior Designer',
    },
  ]);
  const [displayedUser, setDisplayedUser] = useState('');

  const displayUser = () => {};

  const useEffect = (() => {}, [users]);
  return (
    <DashboardMain>
      <Header />
      <FilterBar />
      <Main users={users} />
    </DashboardMain>
  );
}
