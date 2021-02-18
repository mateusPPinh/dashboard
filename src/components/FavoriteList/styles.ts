import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  background: #111111;

  height: 100vh;
  padding: 20px;
`;

export const TitleSection = styled.div`
  h1 {
    color: #e7e7e7;
    font-size: 14px;
  }
`;

export const SearchArea = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #e7e7e7;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 20px;
  color: #e7e7e7;
`;

