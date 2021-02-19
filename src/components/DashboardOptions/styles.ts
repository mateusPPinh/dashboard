import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  grid-area: 'DO';
  height: 100vh;
`;

export const Header = styled.div`
  height: 52px;
  border-bottom: 1px solid ${props => props.theme.colors.line};
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
          color: ${props => props.theme.colors.texts};
        }
      }
    }
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 15px 20px;
`;
