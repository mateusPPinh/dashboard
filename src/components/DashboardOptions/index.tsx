import React from 'react';

import { Container, Header } from './styles';

const DashboardOptions: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <ul>
            <li>
              <a href="">Pessoal</a>
            </li>

            <li>
              <a href="">Listas</a>
            </li>

            <li>
              <a href="">Quadros</a>
            </li>

            <li>
              <a href="">Calendário</a>
            </li>
          </ul>
        </div>

        
      </Header>
    </Container>
  );
}

export default DashboardOptions;