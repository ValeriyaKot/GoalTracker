import React from 'react';
import { View, Text } from 'react-native';
import { MainButton, MainButtonText, FirstScreenImage, TitleText } from '../styles/GlobalStyles.js';

const FirstScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', alignSelf: 'center' }}>
            <FirstScreenImage source={require('../assets/studying.png')} />
            <TitleText>Online learning platform</TitleText>
            <Text style={{margin: 10, justifyContent: 'center', textAlign: 'center'}}>Cras ullamcorper massa sit amet augue vulputate, ac eleifend arcu scelerisque. Sed vestibulum lorem vitae lobortis euismod. Nullam id diam sit amet nisl sollicitudin viverra tincidunt sed metus. Maecenas sodales vestibulum urna, in egestas ipsum convallis sit amet.</Text>
            <MainButton style={{ margin: 10 }} title="Start learning" onPress={() => navigation.navigate('Log in')}>
                <MainButtonText>Start learning</MainButtonText>
            </MainButton>
        </View>
    );
};

export default FirstScreen;
