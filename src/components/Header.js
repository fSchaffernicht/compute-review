import React from 'react';

import styled from 'styled-components';
import { animation, rgb } from 'polished';

const FancyAnimatedTitle = styled.div`
  background: ${rgb(255, 205, 100)};
  ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
`;

const Header = props => (
  <FancyAnimatedTitle>{props.title}</FancyAnimatedTitle>
)

export default Header;
