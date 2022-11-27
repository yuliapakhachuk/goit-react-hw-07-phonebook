import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #68e4c3;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-basis: 33%;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px dashed #31615a;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 20px;
  label {
    display: block;
    margin-bottom: 8px;
  }
  input {
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #31615a;
    outline: none;
    &:focus {
      border: 1px solid #9a46aa;
    }
  }
  button {
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #31615a;
    background-color: #31615a;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in 200ms;
    :hover {
      border: 1px solid #9a46aa;
      background-color: #b97ac6;
    }
  }
`;
