import { css } from 'styled-components';

import { breakPoint } from './breakPoint';

const lg = (style) => css`
  @media (max-width: ${breakPoint.LG}px) {
    ${style}
  }
`;

export const media = {
  lg,
};
