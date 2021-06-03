import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 62px;
  background: #606C38;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;


interface TextInputProps {
  color?: string;
}
export const Text = styled.Text<TextInputProps>`
  color:  ${props => props.color || `#fff`};
  font-weight: bold;
  font-size: 16px;
`;
