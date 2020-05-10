import styled from 'styled-components';

export const Wrap = styled.div`
  background: rgba(123, 154, 61, 0.7);
  height: 100vh;
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Input = styled.input`
  background: rgba(223, 232, 227, 0.8);
  padding: 10px;
  margin: 20px 0;
  border-radius: 3px;
  box-shadow: 9px 10px 5px 0px rgba(57, 82, 63, 0.8);
`;

export const Textarea = styled.textarea`
  background: rgba(223, 232, 227, 0.8);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 9px 10px 5px 0px rgba(57, 82, 63, 0.8);
`;

export const Btn = styled.button`
  margin: auto;
  width: 235px;
  height: 30px;
  border-radius: 3px;
  color: rgb(54, 59, 56);
  box-shadow: 9px 10px 5px 0px rgba(57, 82, 63, 0.8);
`;
