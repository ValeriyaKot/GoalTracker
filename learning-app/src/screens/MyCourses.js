import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
    MainButton,
    MainButtonText,
    TitleText,
} from '../styles/GlobalStyles.js';
import MyCourseItem from '../components/MyCourseItem.jsx';

const MyCoursesScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.courseContainer}>
                <MyCourseItem/>
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

    }
});

export default MyCoursesScreen;
