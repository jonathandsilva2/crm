import styled from 'styled-components';

const UserListMain = styled.ul``;

const UserListItem = styled.li`
  list-style-type: none;
  background-color: red;
`;

export default function UserList(props) {
  console.log('users', props.users);

  const userMap = props.users.map((user) => {
    return (
      <UserListItem>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </UserListItem>
    );
  });

  return <UserListMain>{userMap}</UserListMain>;
}
