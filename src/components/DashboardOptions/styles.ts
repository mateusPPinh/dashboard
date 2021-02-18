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
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    ul {
      display: flex;
      list-style: none;

      li {
        a {
          margin-left: 15px;
          color: #e7e7e7;
        }
      }
    }
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  background: #1e1e1e;
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 15px 20px;
`;
