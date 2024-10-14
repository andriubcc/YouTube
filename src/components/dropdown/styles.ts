import styled, { keyframes } from "styled-components";


const slideIn = keyframes`
       0% {
              transform: translateX(100%);
              opacity: 0;
       }

       100% {
              transform: translateX(0%);
              opacity: 1;
       }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const Container = styled.div<{isOpen: boolean}>`
       position: absolute;
       top: 3.5rem;
       right: 2.5rem;
       width: 180px;
       max-width: 200px;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       row-gap: 8px;
       cursor: pointer;
       background-color: white;
       color: black;
       border: 1px solid grey;
       border-radius: 8px;
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

       animation: ${({isOpen}) => (isOpen? slideIn : slideOut)}    0.3s ease-out forwards;

       div {
              padding: 10px;
              &:hover {
                     background-color: #f1f1f1;
              }
       }

`;