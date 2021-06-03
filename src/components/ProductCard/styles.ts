import styled from 'styled-components/native';

interface ContainerProps {
  size: 'small' | 'big';
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  height: ${(props) => props.size ==='big' ? '261' : '210'}px;
  width: ${(props) => props.size ==='big' ? '200' : '156'}px;
  margin-horizontal:  16px;
  margin-vertical: ${(props) => props.size ==='big' ? '86' : '32'}px;
  align-items: center;
  background: #FFF;
  border-radius: 30px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
`;

export const ProductImage = styled.Image<ContainerProps>`
  height: ${(props) => props.size ==='big' ? '164' : '128'}px;
  width: ${(props) => props.size ==='big' ? '164' : '128'}px;
  border-radius: 82px;
  margin-top: -52px;
  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.07);
`;
export const ProductName = styled.Text<ContainerProps>`
  font-family:  ${({ theme }) => theme.fonts['SFProRounded']};
  font-size: 22px;
  color:  ${({ theme }) => theme.colors['black']};
  margin-top: 40px;
  text-align: center;
  max-width: 100px;
`;
