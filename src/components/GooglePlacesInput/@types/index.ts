import { GooglePlacesAutocompleteProps } from "react-native-google-places-autocomplete";

interface Point {
  lat: number;
  lng: number;
}
interface Geometry {
  location: Point;
  viewport: {
    northeast: Point;
    southwest: Point;
  };
}
  type PlaceTypes = | 'administrative_area_level_1'
  | 'administrative_area_level_2'
  | 'administrative_area_level_3'
  | 'administrative_area_level_4'
  | 'administrative_area_level_5'
  | 'archipelago'
  | 'colloquial_area'
  | 'continent'
  | 'country'
  | 'establishment'
  | 'finance'
  | 'floor'
  | 'food'
  | 'general_contractor'
  | 'geocode'
  | 'health'
  | 'intersection'
  | 'locality'
  | 'natural_feature'
  | 'neighborhood'
  | 'place_of_worship'
  | 'plus_code'
  | 'point_of_interest'
  | 'political'
  | 'post_box'
  | 'postal_code'
  | 'postal_code_prefix'
  | 'postal_code_suffix'
  | 'postal_town'
  | 'premise'
  | 'room'
  | 'route'
  | 'street_address'
  | 'street_number'
  | 'sublocality'
  | 'sublocality_level_1'
  | 'sublocality_level_2'
  | 'sublocality_level_3'
  | 'sublocality_level_4'
  | 'sublocality_level_5'
  | 'subpremise'
  | 'town_square';

 interface GooglePlacesExtendedProps {
  formatted_address: string | undefined;
  geometry: Geometry | undefined;
  name: string | undefined;
  types: [PlaceTypes] | undefined;
}

 interface GooglePlacesInputProps extends GooglePlacesAutocompleteProps{
  name: string;
  setValue: (el: any) => void;
}

export { GooglePlacesInputProps, GooglePlacesExtendedProps }
