import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const SearchContainer = styled.div`
  width: 100%;
  `;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({openMenu}) => openMenu? '0px 50px 0 0px' : '0px 10px 0 0px'};
  box-sizing: border-box;

  @media(max-width: 834px) {
    padding: 100px 10px 0 100px;
  }
  @media(max-width: 600px) {
    row-gap: 30px;
  }
  @media(max-width: 414px) {
    padding: 100px 10px 0 10px;
  }
`;