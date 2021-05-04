import styled from 'styled-components';

import Search from '../molecules/Search';
import UserList from '../molecules/UserList';
import UserItem from '../molecules/UserItem';

const SidebarMain = styled.div`
  width: 35%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Sidebar() {
  return (
    <SidebarMain>
      <Search />
      <UserList />
      <UserItem />
    </SidebarMain>
  );
}
