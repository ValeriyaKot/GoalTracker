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
        elevation: 10,
    },
    web: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }
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

export const AccountButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 300px;
  height: 40px;
  min-height: 40px;
  align-items: baseline;
  justify-content: center;
`;

export const AccountButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
`;



export const FirstScreenImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px; 
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
    background-color: ${(props) => props.theme.colors.white};

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
    ${shadowStyle};
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

export const CourseItemBox = styled.TouchableOpacity `
    width: 150px;
    height: 150px;
    border-style: solid;
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.white};
    margin: 10px;
    ${shadowStyle};
`;

export const CourseImageItem = styled.Image `
    width: 150px;
    height: 75px;
`

export const AvatarImageItem = styled.Image `
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const MyCourseItemBox = styled.TouchableOpacity `
    flex-direction: row;
    align-items: center;
    width: 330px;
    height: 150px;
    border-style: solid;
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.white};
    margin: 10px;
    ${shadowStyle};
`;

export const MyCourseImageItem = styled.Image `
    width: 150px;
    height: 150px;
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
        medium: '15px',
        large: '24px',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
};
