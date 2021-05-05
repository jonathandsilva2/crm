import styled from 'styled-components';

import UserList from '../molecules/UserList';

const FilterBarContainer = styled.div`
  width: 35%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Sidebar(props) {
  return <FilterBarContainer></FilterBarContainer>;
}
