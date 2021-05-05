import styled from 'styled-components';
import UserList from '../molecules/UserList';

const MainContainer = styled.div``;

export default function Main(props) {
  return (
    <MainContainer>
      <UserList users={props.users} />
    </MainContainer>
  );
}
