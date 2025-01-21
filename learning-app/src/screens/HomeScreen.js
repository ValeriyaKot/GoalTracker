import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    MainButton,
    MainButtonText,
    TitleText,
} from '../styles/GlobalStyles.js';
import CourseItem from '../components/CourseItem.jsx';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TitleText style={styles.title}>Welcome Back, </TitleText>
                <TitleText style={styles.title}>Valeryia Kot! </TitleText>
            </View>
            <View style={styles.buttonsContainer}>
                <MainButton onPress={() => navigation.navigate('Book Course')} style={styles.buttonContainer}>
                    <MainButtonText>Book class</MainButtonText>
                </MainButton>
                <MainButton onPress={() => navigation.navigate('My Courses')} style={styles.buttonContainer}>
                    <MainButtonText>My courses</MainButtonText>
                </MainButton>
            </View>
            <View style={styles.courseContainer}>
                <TitleText style={{ marginBottom: 10 }}>Last courses</TitleText>
                <CourseItem>
                    <Text style={styles.text}>2h 25 min</Text>
                </CourseItem>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        margin: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,

    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    buttonContainer: {
        width: 150,
        height: 40,
        marginHorizontal: 5
    },
    courseContainer: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '60vh',
        overflow: 'auto',

    },
    text: {
        color: '#874ECF',
        fontSize: 12,
        marginHorizontal: 10
    },
});

export default HomeScreen;
