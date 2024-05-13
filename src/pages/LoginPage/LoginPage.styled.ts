import styled from "styled-components";

export const SCLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

export const LoginFormContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  font-size: 24px;z
  margin-bottom: 20px;
  color: #333;
`;

export const AuthForm = styled.form`
  .authorisation {
    margin-top: 20px;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007aff;
    }
  }

  .error-message {
    color: #ff0000;
    font-size: 14px;
    margin-top: 5px;
  }

  .btn-76 {
    margin-top: 20px;
    width: 100%;
    background-color: #007aff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
