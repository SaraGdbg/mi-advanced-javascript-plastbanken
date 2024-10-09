import styled from 'styled-components';

export const StyledJobShortContainer = styled.div`
  background-color: rgba(var(--mint-var), 0.2);
  padding: 1rem;
  width: 80vw;
  max-width: 1240px;
  border-radius: 8px;
  border: 1px solid var(--digi--color--border--inverted-3);
  transition: box-shadow 0.2s ease;
  h3 {
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
  section {
    display: flex;
    justify-content: space-between;
    div {
      text-align: right;
    }
  }
  @media (min-width: 62rem) {
    .sc-digi-layout-container-h
      .digi-layout-container.sc-digi-layout-container {
      --digi--layout-container--width: var(--digi--container-width--large);
    }
  }
  &:hover {
    background-color: rgba(var(--mint-var), 0.5);
    box-shadow: 0 4px 8px rgba(60, 95, 54, 0.2);
  }

  /* :hover {
    filter: drop-shadow(red 5px 5px);
  } */
`;
