import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: black;
  padding: 0 13px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledFLIXBOXLOGO = styled.img`
  width: 240px;
  margin-top: 7px;
 

  @media screen and (max-width: 500px) {
    width: 140px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;
  

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
