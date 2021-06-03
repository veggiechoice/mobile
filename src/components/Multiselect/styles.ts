import styled from 'styled-components/native';



export const Container = styled.View`
  position: relative;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

interface ButtonRecognizeProps {
  visible: boolean
}
export const ButtonRecognize = styled.TouchableOpacity<ButtonRecognizeProps>`
  display: ${props => props.visible ? 'flex' : 'none'};
`;

interface LabelProps {
  active?: boolean;
}
export const Label = styled.Text<LabelProps>`
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.active ? '#283618':'#000'};
  opacity: 0.4;
  font-family:  ${({ theme }) => theme.fonts['SFProText']};
  margin-bottom: 2px;
  margin-left: 5px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;


export const ListContainer = styled.View`
  flex: 1;
  width: 100%;
`;
