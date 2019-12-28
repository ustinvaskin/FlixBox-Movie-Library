import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: black;
  // border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }

  .actor-name {
    font-weight: bold;
    display: block;
    font-size: 19px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    // font-family: Josefin sans;
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
