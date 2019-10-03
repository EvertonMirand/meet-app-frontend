import styled from 'styled-components';
import { darken } from 'polished';
import Colors from '~/theme/Colors';

const Button = styled.button`
  background: ${Colors.buttonBackground};
  color: ${Colors.defaultText};
  border: 0;
  border-radius: 4px;

  align-content: center;
  align-items: center;
  align-self: center;

  transition: background 0.2s;

  justify-content: space-between;

  &:hover {
    background: ${darken(0.03, Colors.buttonBackground)};
  }
`;

export default Button;
