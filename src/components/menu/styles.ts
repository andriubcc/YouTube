import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
 width: ${({ openMenu }) => openMenu? '250px' : '100px' };
 height: calc(100vh - 55px);
 box-sizing: border-box;
 padding: 10px 10px 10px 10px;
 display: flex;
 align-items: center;
 flex-direction: column;
 overflow-y: auto;
 position: sticky;
 top: 55px;

 .divider {
  width: 100%;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-top: solid 2px grey;
 }

  .divider-1 {
  width: 100%;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-top: solid 2px grey;
  display: ${({ openMenu}) => openMenu? 'block' : 'none'};
 }
`;







export const MenuItem = styled.div<{ openMenu: boolean }>`
 width: ${({ openMenu }) => openMenu? '98%' : '98%' };
 min-height: ${({ openMenu }) => openMenu? '45px' : '70px' };
 border-radius: 10px;
 cursor: pointer;
 padding: ${({ openMenu }) => openMenu? '2px 2px' : '0 20px' };
 box-sizing: border-box;
 flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
 align-items: center;
 justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };

 span {
  font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
  margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
  font-size: ${({ openMenu }) => openMenu? '16px' : '12px' };
  display: ${({ openMenu}) => openMenu? '' : 'none'};
   }


  :hover {
    background-color: #f2f2f2;
  }

`;



export const  ButtonIcon = styled.img`
    width: 25px;
`;

export const Span = styled.span<{ openMenu: boolean}>`
  padding-left: ${({openMenu }) => openMenu? 'none' : '100px' };
  margin-top: 10px;
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
  font-weight: 500;
`;

export const LLC = styled.span< {openMenu: boolean} >`
   display: ${({openMenu}) => openMenu? 'block' : 'none' } ;

   .menu-footer {
    font-weight: 500;
   }
`;