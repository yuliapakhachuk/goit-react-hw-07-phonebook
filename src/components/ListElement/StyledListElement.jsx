import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 12px 20px;
  background-color: #68e4c382;
  border: 1px dashed #59c6a9;
  border-radius: 4px;
  transition: ease-in 200ms;
  button {
    display: block;
    padding: 8px 24px;
    border-radius: 4px;
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
