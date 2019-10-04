import styled from 'styled-components';
import { darken } from 'polished';
import Colors from '~/theme/Colors';

export const Container = styled.div`
  max-width: 920px;
  margin: 50px auto;

  header {
    margin: 10px;
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${Colors.defaultText};
      font-size: 32px;
      font-weight: bold;
    }

    button {
      height: 44px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 25px;
      display: flex;
      height: 42;
      border: 0;
    }
  }

  ul {
    margin-top: 30px;
    grid-gap: 10px;
    display: grid;
  }
`;

export const MeetUp = styled.li`
  margin-top: 10px;
  grid-gap: 10px;
  display: flex;
  justify-content: space-between;
  height: 62px;
  align-items: center;
  padding: 20px 30px;
  background: ${Colors.listBackground};
  border-radius: 4px;

  strong {
    color: ${Colors.defaultText};
    font-size: 18px;
  }

  div {
    color: ${Colors.link};
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  svg {
    margin-left: 5px;
  }
`;

export const PageControl = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: 0;
    align-items: center;
    font-size: 16px;
    color: ${Colors.defaultText};

    transition: color 0.2s;
    padding: 0 25px;
    display: flex;

    &:hover {
      color: ${darken(0.3, Colors.defaultText)};
    }

    &[disabled] {
      background: none;
      color: #ccc;
      cursor: auto;
    }
  }

  span {
    align-items: center;
    color: ${Colors.defaultText};
    font-size: 17px;
  }
`;
