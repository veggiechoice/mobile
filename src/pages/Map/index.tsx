
import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import api from '../../services/api';

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import {
  Container,
  Header,
  Title,
  BackButton,
} from './styles'
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { Load } from '../Load';

export default function Map() {
  const [ region, setRegion ] = React.useState<any>({});
  const [ places, setPlaces ] = React.useState<any []>([]);
  const [ loading, setLoading ] = React.useState(true);
  const { goBack } = useNavigation();
  const mapView = React.useRef<any>();

  React.useEffect(() => {
    loadInitialPosition();
  }, []);

   async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();

      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          accuracy:5,
        });

        const { latitude, longitude } = coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        });

        setTimeout(() => {
          loadPlaces();
        }, 2000)

      }
    }
  const loadPlaces = async () => {
    const { latitude, longitude } = region;
    const response = await api.get('/places', {
      params: {
        _latitude: latitude,
        _longitude: longitude
      }
    });
    setPlaces(response.data);
    setLoading(false);
  }

  if(loading)
    return <Load />

  return (
    <Container>
      <Header>
          <Title>Supermercados / Lojas Próximas</Title>
        <BackButton onPress={() => goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="#FFF" />
        </BackButton>
      </Header>
            <MapView
              style={styles.map}
              region={region}
              showsUserLocation
              loadingEnabled={true}
              ref={mapView}
            >
              {places.map(place => (
                <Marker
                  key={place._id}
                  coordinate={{
                    latitude: place.location.coordinates[0],
                    longitude: place.location.coordinates[1]
                  }}
                >
                  {/* <Image source={dotImage} style={styles.avatar} /> */}
                  <Callout>
                      <View style={ styles.callout  }>
                        <Text style={ styles.devName  }>{place.name}</Text>
                        <Text style={ styles.devBio  }>{place.description}</Text>
                        {/* <Text style={ styles.devTechs  }>{dev.techs.join(', ')}</Text> */}
                      </View>
                  </Callout>
                </Marker>
              ))}
            </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },
});
