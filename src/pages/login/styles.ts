import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 40px;
    height: 80vh;
`;


export const LoginContainer = styled.div`
    height: 380px;
    width: 450px;
    background-color: white;
    border-radius: 5px;
    border: solid gray 1px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 40px;
    align-items: center;


    .login {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 50px;
    };

    span {
        display: block;
    };

    input {
        width: 90%;
        height: 30px;
        border-radius: 5px;
        margin-top: 5px;
    }

    button {
        width: 100px;
        height: 50px;
        border-radius: 5px;
        color: white;
        background-color: blue;
    }
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0px;

  input {
    margin-top: 0px;
    margin-left: 100px;
  };

  .cross {
    margin-right: 150px;
    min-width: 130px;
  }
`;