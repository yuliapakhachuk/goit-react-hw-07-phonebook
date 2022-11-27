import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  input {
    display: block;
    height: 28px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #376761;
    outline: none;
    &:focus {
      border: 1px solid #db4bff;
    }
  }
`;
