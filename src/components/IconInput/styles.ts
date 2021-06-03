import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #EFEEEE;
  border-radius: 30px;


  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family:  ${({ theme }) => theme.fonts['SFProText']};
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;
