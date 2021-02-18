import styled from 'styled-components';

export const Container = styled.div`
  background: #111111;
  grid-area: 'DO';
  height: 100vh;

  /* padding: 20px; */
`;


export const Header = styled.div`
  height: 52px;
  border-bottom: 1px solid #1e1e1e;

  div {
    padding: 20px;
    
    ul {
      display: flex;
      list-style: none;

      li {
        a {
          margin-left:  15px;
          color: #e7e7e7;
        }
      }
    }
  }
`;