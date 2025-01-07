import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Fontisto';
import { Divider } from 'react-native-elements';
import {
    MainButton,
    MainButtonText,
    TitleText,
    MainInputForm,
    CheckBox,
    SocialButton
} from '../styles/GlobalStyles.js';

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                margin: 1,
                padding: 1,

            }}
        >
            <View style={{ alignItems: 'center' }}>
                <TitleText style={{ fontSize: 30 }}>Learning App</TitleText>
                <Text
                    style={{
                        margin: 10,
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#874ECF',
                        fontWeight: 'bold',
                        width: 300,
                        fontSize: 16
                    }}
                >
                    Enter your log in details to access your account
                </Text>
            </View>
            <View style={{ margin: 10 }}>

                <MainInputForm
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    selectionColor="transparent"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    isFocused={isFocused}
                />

                <MainInputForm
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    selectionColor="transparent"
                    secureTextEntry
                />
                <View style={{ flexDirection: 'row', margin: 5, marginLeft: 0, alignItems: 'center', justifyContent: 'space-between' }}>
                    <CheckBox
                        isChecked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                        label="Remember Me?"
                    />
                    <Text style={{ color: '#E8505B' }}>Forgot password?</Text>
                </View>


            </View>


            <MainButton style={{ margin: 10 }} onPress={() => navigation.navigate('Home')}>
                <MainButtonText >Log In</MainButtonText>
            </MainButton>

            <Text style={{ color: '#959595', margin: 10 }}>------------------- Or -------------------</Text>

            <View style={{
                flexDirection: 'colomn', justifyContent: 'space-between', margin: 10
            }}>
                <MainButton style={{ margin: 5, marginTop: 0, backgroundColor: '#E8505B', flexDirection: 'row' }}>
                    <Icon name="google" size={14} color="#fff" style={{margin:10}}/>
                    <MainButtonText>Google</MainButtonText>
                </MainButton>

                <MainButton style={{ margin: 5, marginBottom: 0, backgroundColor: '#5C7BD2', flexDirection: 'row' }}>
                <Icon name="facebook" size={14} color="#fff" style={{margin:10}} />
                    <MainButtonText>Facebook</MainButtonText>
                </MainButton>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>
                <Text style={{ color: '#874ECF' }}>Don't have an account?</Text>
                <Text style={{ color: '#5C7BD2' }}> Create account</Text>
            </View>

        </View>
    );
};

export default LogInScreen;
