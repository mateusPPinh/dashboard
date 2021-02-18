import React from 'react';

import { Container, TitleSection, SearchArea, SearchIcon } from './styles';

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
    </Container>
  );
}

export default FavoriteList;