import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 40px);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UploadContainer = styled.div`
    height: 500px;
    width: 400px;
    border: solid 1px gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   align-items : center;
`;