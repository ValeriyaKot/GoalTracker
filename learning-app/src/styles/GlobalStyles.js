import styled from 'styled-components/native';
import { Platform, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
  padding: 10px 15px;
  width: 300px;
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
`;

export const MainInputForm = styled.TextInput`
    width: 300px;
    padding: 10px 15px;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    color: #959595;
    margin: 5px;
    margin-left: 0px;
    margin-right: 0px;
    border-color: ${(props) => (props.isFocused ? '#D93D59' : '#874ECF')};
    background-color: #fff;

`;

export const SocialButton = styled.TouchableOpacity`
    width: 125px;
    height: 35px;
    padding: 10px 15px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    margin: 5px;
    `

const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Box = styled.View`
  width: 15px;
  height: 15px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => (props.isChecked ? props.theme.colors.primary : 'transparent')};
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;

const CheckBoxLabel = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

export const CheckBox = ({ isChecked, onPress, label }) => (
    <TouchableOpacity onPress={onPress}>
      <CheckBoxContainer>
        <Box isChecked={isChecked} >
          {isChecked && <Icon name="check" size={13} color="#fff" />}
        </Box>
        <CheckBoxLabel>{label}</CheckBoxLabel>
      </CheckBoxContainer>
    </TouchableOpacity>
  );


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
        medium: '15px',
        large: '24px',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
};
