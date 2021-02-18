import React from 'react';

import 
{ 
  Container, 
  SettingsContent, 
  SettingsIcon,
  SidebarOptions,
  DataIcon,
  FolderIcon,
  CaseIcon,
  ConfigIcon,
  BaseIcon,
  Footer,
  UserInitialLetterName, 
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SettingsContent>
        <a href="#">
          <SettingsIcon />
        </a>
      </SettingsContent>

      <SidebarOptions>
        <a href="#">
          <DataIcon />
        </a>

        <a href="#">
          <FolderIcon />
        </a>

        <a href="#">
          <CaseIcon />
        </a>

        <a href="#">
          <ConfigIcon />
        </a>

        <a href="#">
          <BaseIcon />
        </a>
      </SidebarOptions>

      <Footer>
        <SettingsIcon />

        <UserInitialLetterName>
          <a href="#">M</a>
        </UserInitialLetterName>
      </Footer>
    </Container>
  );
}

export default Sidebar;