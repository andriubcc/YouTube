import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  
  
  

span {
    display: flex;
    align-items: center;
    color: black;
    background-color: #d1d1d1;
    font-family: 'Oswald', sans-serif;
    border-radius: 7px;
    padding: 10px;
    cursor: pointer;
  }

  span:hover {
    background-color: black;
    color: white;
  }
`;