import styled from 'styled-components';

/**
 * SD => Sidebar
 * FL => Favorite List
 * DI => Dashboard Info
 * DO => Dashboard Options
 * DD => Dashboard Data 
 */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto;
  grid-template-rows: 46px auto;

  grid-template-areas: 
    'SD SN DI DI',
    'SD DO DD DD';

    height: 100vh;
`;