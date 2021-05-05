import React from 'react';
import Search from '../molecules/Search';
import { Button } from '../atoms/BasicElements';

import styled from 'styled-components';

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderMain>
      <h1>People</h1>
      <Button>Add user</Button>
      <Search />
    </HeaderMain>
  );
}
