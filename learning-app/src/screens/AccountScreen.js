import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleText, MainButton, MainButtonText, AccountButton, AccountButtonText, AvatarImageItem } from '../styles/GlobalStyles.js';
import AccountButtonItem from '../components/AccountButton.jsx';


const data = [
    { id: '1', title: 'Account settings' },
    { id: '2', title: 'Notifications settings' },
    { id: '3', title: 'Privacy & Policy' },
    { id: '4', title: 'Help Center' },
    { id: '5', title: 'About us' },
];


const AccountScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <View style={styles.avatarContainer}>
                    <AvatarImageItem source={require('../assets/_.jpeg')} />
                    <View style={{ flexDirection: 'column' }}>
                        <TitleText style={styles.boxText}>Valeryia Kot</TitleText>
                        <Text style={styles.boxText}>valeric.kot988@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.centerContent}>
                <AccountButtonItem />
                <View style={styles.deleteAccountContainer}>
                    <AccountButton title="Delete account">
                        <AccountButtonText style={{ color: '#E33E56' }}>Delete account</AccountButtonText>
                    </AccountButton>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <MainButton style={{ margin: 10 }} title="Log out" >
                    <MainButtonText>Log out</MainButtonText>
                </MainButton>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    box: {
        width: '100%',
        height: 150,
        backgroundColor: '#874ECF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: 300,
    },
    boxText: {
        color: '#FFFFFF',
        marginLeft: 15,
    },
    deleteAccountContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingBottom: 40,
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
    }
});


export default AccountScreen;
