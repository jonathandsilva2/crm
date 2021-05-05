import styled from 'styled-components';

import { Button, Input } from '../atoms/BasicElements';

const SearchBar = styled.div`
  background-color: orange;
  padding: em;
  display: flex;
  border-radius: 4px;
  input[type='text'] {
    padding: 1em;
    width: 100%;
  }
`;

export default function Search(props) {
  return (
    <SearchBar>
      <Input theme={props.theme} type="text" placeholder="Search for users" />
      <Button theme={props.theme}>Submit</Button>
    </SearchBar>
  );
}
