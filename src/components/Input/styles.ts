import styled from 'styled-components/native';

interface TInputProps {
  isBigInput: boolean;
}
export const Wrapper = styled.View`
  margin-top: 30px;
  elevation: -5;
  z-index: -5;
`;

export const Container = styled.View<TInputProps>`
  padding: ${props => props.isBigInput ? '5px' : '0' };
  height: ${props => props.isBigInput ? '146px' : '46px' };
  flex-direction: row;
  align-items: ${props => props.isBigInput ? 'flex-start' : 'center'};
  border-width: ${props => props.isBigInput ? '0.5px' : '0' };
  border-color: ${props => props.isBigInput ? '#999' : '#999' };
  border-bottom-width: 0.5px;

  margin-top: ${props => props.isBigInput ? '5px' : '0'};
  elevation: -5;
  z-index: -5;
`;

export const TInput = styled.TextInput<TInputProps>`
  flex: 1;
  font-size: 15px;
  color: #000;
  padding: 0 5px;

`;

export const Label = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #000;
  opacity: 0.4;
  font-family:  ${({ theme }) => theme.fonts['SFProText']};
  margin-left: 5px;
  margin-bottom: 2px;
`;

export const EmptyContainer = styled.View`
  padding: 30px;
  align-items: center;
`;

export const EmptySectionTitle = styled.Text`
  flex: 1;
  font-family:  ${({ theme }) => theme.fonts['SFProTextSemibold']};
  opacity: 0.4;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
`;

export const EmptyImage = styled.Image`
  margin: -60px 0;
  opacity: 0.5;
`;
