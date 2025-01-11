import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {
    MainButton,
    MainButtonText,
    TitleText,
    MainInputForm,
    CheckBox,
} from '../styles/GlobalStyles.js';


const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TitleText style={styles.title}>Learning App</TitleText>
                <Text style={styles.subtitle}>
                    Enter your log in details to access your account
                </Text>
            </View>

            <View style={styles.inputContainer}>
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

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        isChecked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                        label="Remember Me?"
                    />
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>
            </View>

            <MainButton
                style={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
            >
                <MainButtonText>Log In</MainButtonText>
            </MainButton>

            <Text style={styles.orText}>
                ------------------- Or -------------------
            </Text>

            <View style={styles.socialButtonsContainer}>
                <MainButton style={[styles.socialButton, styles.googleButton]}>
                    <Icon name="google" size={14} color="#fff" style={styles.icon} />
                    <MainButtonText>Google</MainButtonText>
                </MainButton>

                <MainButton style={[styles.socialButton, styles.facebookButton]}>
                    <Icon name="facebook" size={14} color="#fff" style={styles.icon} />
                    <MainButtonText>Facebook</MainButtonText>
                </MainButton>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Text style={styles.createAccountText}> Create account</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 1,
        padding: 1,
    },
    headerContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    subtitle: {
        margin: 10,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#874ECF',
        fontWeight: 'bold',
        width: 300,
        fontSize: 16,
    },
    inputContainer: {
        margin: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 5,
        marginLeft: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forgotPasswordText: {
        color: '#E8505B',
    },
    loginButton: {
        margin: 10,
    },
    orText: {
        color: '#959595',
        margin: 10,
    },
    socialButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    socialButton: {
        margin: 5,
        flexDirection: 'row',
    },
    googleButton: {
        marginTop: 0,
        backgroundColor: '#E8505B',
    },
    facebookButton: {
        marginBottom: 0,
        backgroundColor: '#5C7BD2',
    },
    icon: {
        margin: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    footerText: {
        color: '#874ECF',
    },
    createAccountText: {
        color: '#5C7BD2',
    },
});

export default LogInScreen;
