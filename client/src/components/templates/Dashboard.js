import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Main from '../organisms/Main';
import Sidebar from '../organisms/Sidebar';

const DashboardMain = styled.div`
  display: flex;
  background-color: red;
  min-height: 400px;
`;

export default function Dashboard() {
  const [theme, setTheme] = useState('theme1');

  return (
    <DashboardMain>
      <Sidebar />
      <Main />
    </DashboardMain>
  );
}
