import React from 'react';

import 
{ 
  Container, 
  TitleSection, 
  SearchArea, 
  SearchIcon, 
  OptionArea,
  UserTasksList,
  FolderIcon,
  GroupIcon,
  Content,
  List,
  PencilIcon,
  UserIcon,
  StarIcon,
  SendIcon, 
} from './styles';

const FavoriteList: React.FC = () => {
  return (
    <Container>
      <TitleSection>
        <h1>Favoritos</h1>
      </TitleSection>

      <SearchArea>
        <p>Pesquise</p>
        <a href="#">
          <SearchIcon />
        </a>
      </SearchArea>

      <OptionArea>
        <div>
          <a href="#">Tarefas: <b>Todas completas</b></a>
          <a href="#">Em progresso: <b>15</b></a>
          <a href="#">Tarefas em grupo: <b>0</b></a>
        </div>
      </OptionArea>

      <UserTasksList>
          <div>
            <FolderIcon />
            <span>Agenda pessoal</span>
          </div>
        </UserTasksList>

        <Content>
          <List>
            <a className="content" href="#">
              Suas anotações
              <PencilIcon />
            </a>

            <a className="content" href="#">
              Seus contatos
              <UserIcon />
            </a>

            <a className="content" href="#">
              Destaques
              <StarIcon />
            </a>

            <a className="content" href="#">
              Enviados
              <SendIcon />
            </a>
          </List>
        </Content>

        <UserTasksList>
          <div>
            <GroupIcon />
            <span>Grupos</span>
          </div>
        </UserTasksList>

        <Content>
          <List>
            <a className="content" href="#">
              Suas anotações
              <PencilIcon />
            </a>

            <a className="content" href="#">
              Seus contatos
              <UserIcon />
            </a>

            <a className="content" href="#">
              Destaques
              <StarIcon />
            </a>

            <a className="content" href="#">
              Enviados
              <SendIcon />
            </a>
          </List>
        </Content>

        <UserTasksList>
          <div>
            <GroupIcon />
            <span>Contatos</span>
          </div>
        </UserTasksList>

        <Content>
          <List>
            <a className="content" href="#">
              Suas anotações
              <PencilIcon />
            </a>

            <a className="content" href="#">
              Seus contatos
              <UserIcon />
            </a>

            <a className="content" href="#">
              Destaques
              <StarIcon />
            </a>

            <a className="content" href="#">
              Enviados
              <SendIcon />
            </a>
          </List>
        </Content>
    </Container>
  );
}

export default FavoriteList;