import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 40px);
    background-color: white;
    display: flex;
    justify-content: center;

`;

export const UploadContainer = styled.div`
    height: 300px;
    width: 500px;
    border: solid 1px gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   align-items : center;

   input {
    width: 300px;
    height: 40px;
   }
`;