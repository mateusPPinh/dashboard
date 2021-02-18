import styled from 'styled-components';
import 
{ 
  MdSearch, 
  MdFolder,
  MdPersonPinCircle,
  MdVerifiedUser,
  MdStar,
  MdSend,
  MdGroup  
} from 'react-icons/md';

export const Container = styled.div`
  background: #111111;

  height: 100vh;
  padding: 20px;
  overflow-y: scroll;
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
    background: #F24333;
    padding: 10px 10px;
    border-radius: 4px;
    
    span {
      color: #e7e7e7;
      font-size: 15px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;

export const FolderIcon = styled(MdFolder)`
  font-size: 20px;
  color: #e7e7e7;
`;

export const GroupIcon = styled(MdGroup)`
  font-size: 20px;
  color: #e7e7e7;
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

    color: #e7e7e7;
  }
`;

export const PencilIcon = styled(MdPersonPinCircle)``;

export const UserIcon = styled(MdVerifiedUser)``;

export const StarIcon = styled(MdStar)``;

export const SendIcon = styled(MdSend)``;
