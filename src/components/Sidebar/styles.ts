import styled, { css } from "styled-components";
import {
  MdSettings,
  MdDataUsage,
  MdFolder,
  MdFolderOpen,
  MdSettingsApplications,
  MdDateRange,
} from "react-icons/md";

export const Container = styled.div`
  grid-area: "SD";

  background-color: #111111;
  height: 100vh;
  border-right: 1px solid #707070;
`;

export const SettingsContent = styled.div`
  padding: 20px;
`;

const iconsStyle = css`
  color: #707070;
  font-size: 25px;
  margin-bottom: 15px;
  transition: color 0.2s;

  &:hover {
    color: #1483e9;
  }
`;

export const SettingsIcon = styled(MdSettings)`
  ${iconsStyle};
`;

export const SidebarOptions = styled.div`
  padding: 20px;
`;

export const DataIcon = styled(MdDataUsage)`
  ${iconsStyle};
`;

export const FolderIcon = styled(MdFolder)`
  ${iconsStyle};
`;

export const CaseIcon = styled(MdFolderOpen)`
  ${iconsStyle};
`;

export const ConfigIcon = styled(MdSettingsApplications)`
 ${iconsStyle};
`;

export const BaseIcon = styled(MdDateRange)`
  ${iconsStyle};
`;

export const Footer = styled.div`
  padding: 20px;
  margin-top: 12rem;
`;

export const UserInitialLetterName = styled.div`
  background-color: #052440;
  border-radius: 50%;
  padding: 6px 8px;

  a {
    color: #fff;
  }
`;