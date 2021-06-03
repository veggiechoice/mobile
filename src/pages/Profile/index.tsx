import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import nouserSrc from '../../assets/noAvatar.png';
import { useAuth } from '../../hooks/auth';
import { colors } from '../../theme/colors';
import {
  Container,
  Header,
  BackButton,
   Body,
   Title,
   DetailsContainer,
   Subtitle,
   AlertButton,
   AlertButtonText,
   AlterButton,
   AlterButtonText,
   PersonalInfoContainer,
   ProfileImage,
   PersonalInfo,
   ProfileName,
   PersonalInfoDivisor,
   ProfileEmail,
   ProfilePhone,
   ProfileAddress,
   ProfileMenuContainer,
   MenuButton,
   MenuButtonText,
} from './styles';

const Profile: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { signOut, user } = useAuth();

  const handleNavigate = (route: string) => {
    return navigate(route)
  }

  function getUserAvatar() {
    if(user.avatar_url){
      if(user.avatar_url === 'https://veggiechoice.herokuapp.com/null') {
        return nouserSrc;
      }
      return {uri: user.avatar_url};
    } else {
      return nouserSrc;
    }
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()}>
          <Entypo name="chevron-left" size={24}  color={colors['green-700']} />
        </BackButton>
      </Header>
      <Body>
        <Title>Meu Perfil</Title>
        <DetailsContainer>
          <Subtitle>Informaçōes pessoais</Subtitle>
          <AlterButton onPress={() => handleNavigate('ChangeProfile')}>
            <AlterButtonText>Alterar</AlterButtonText>
          </AlterButton>
        </DetailsContainer>
        <PersonalInfoContainer>
          <ProfileImage source={getUserAvatar()}></ProfileImage>
          <PersonalInfo>
            <ProfileName>{user.name}</ProfileName>
            <ProfileEmail>{user.email}</ProfileEmail>
            <PersonalInfoDivisor />
            <ProfilePhone>+55 (**) ****-****</ProfilePhone>


          </PersonalInfo>
        </PersonalInfoContainer>

        <ProfileMenuContainer>
          <MenuButton onPress={() => handleNavigate('Favorites')}>
            <MenuButtonText>Favoritos</MenuButtonText>
            <Entypo name="chevron-right" size={24} color={colors['green-700']} />
          </MenuButton>
          <MenuButton onPress={() => handleNavigate('AddProduct')}>
            <MenuButtonText>Adicionar Produto</MenuButtonText>
            <Entypo name="chevron-right" size={24}  color={colors['green-700']} />
          </MenuButton>
          <MenuButton onPress={() => handleNavigate('Map')}>
            <MenuButtonText>Explorar Mapa</MenuButtonText>
            <Entypo name="chevron-right" size={24}  color={colors['green-700']} />
          </MenuButton>
          <MenuButton onPress={() => signOut()}>
            <MenuButtonText>Sair do Aplicativo</MenuButtonText>
            <Entypo name="chevron-right" size={24}  color={colors['green-700']} />
          </MenuButton>
        </ProfileMenuContainer>
      </Body>

    </Container>
  );
}

export default Profile;
