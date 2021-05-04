import styled from 'styled-components';

const SearchInput = styled.input`
  font-size: 14px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 13px;
  ::placeholder {
    color: red;
  }
`;

export default function Search() {
  return (
    <div>
      <SearchInput type="text" placeholder="Search for users" />
    </div>
  );
}
