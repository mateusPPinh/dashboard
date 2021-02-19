import styled, { css } from 'styled-components';
import {
  MdSearch,
  MdFolder,
  MdPersonPinCircle,
  MdVerifiedUser,
  MdStar,
  MdSend,
  MdGroup,
} from 'react-icons/md';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};

  grid-area: 'FL';

  height: 100vh;
  padding: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(32, 34, 37);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #2f3136;
  }
`;

export const TitleSection = styled.div`
  h1 {
    color: ${props => props.theme.colors.texts};
    font-size: 14px;
  }
`;

export const SearchArea = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme.colors.texts};
    font-size: 14px;
    font-weight: bold;
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 20px;
  color: ${props => props.theme.colors.icons};
`;

export const OptionArea = styled.div`
  margin-top: 25px;

  div {
    display: flex;
    flex-direction: column;

    a + a {
      margin-top: 15px;
    }

    a {
      color: #707070;
    }
  }
`;

export const UserTasksList = styled.div`
  margin-top: 25px;

  div {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.button};
    padding: 10px 10px;
    border-radius: 4px;

    span {
      color: ${props => props.theme.colors.texts};
      font-size: 15px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;

const iconsStyle = css`
  font-size: 20px;
  color: ${props => props.theme.colors.icons};
`;

export const FolderIcon = styled(MdFolder)`
  ${iconsStyle};
`;

export const GroupIcon = styled(MdGroup)`
  ${iconsStyle};
`;

export const Content = styled.div`
  margin-top: 25px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  a + a {
    margin-top: 15px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme.colors.texts};
  }
`;

export const PencilIcon = styled(MdPersonPinCircle)``;

export const UserIcon = styled(MdVerifiedUser)``;

export const StarIcon = styled(MdStar)``;

export const SendIcon = styled(MdSend)``;
