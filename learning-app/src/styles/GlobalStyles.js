// import { Button } from 'bootstrap';
import styled from 'styled-components/native';
import { Platform } from 'react-native';



const shadowStyle = Platform.select({
    ios: {
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
    },
    android: {
      elevation: 6,
    },
  });


export const MainButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  ${shadowStyle};
`;

export const MainButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const FirstScreenImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px; /* пример добавления радиуса */
`;

export const TitleText = styled.Text`
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
`

export const theme = {
    colors: {
      primary: '#874ECF',
      secondary: '#03dac6',
      background: '#FFFFFF',
      text: '#333',
      white: '#fff',
    },
    fontSizes: {
      small: '12px',
      medium: '16px',
      large: '24px',
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
    },
  };
  