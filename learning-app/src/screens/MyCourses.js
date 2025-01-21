import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyCourseItem from '../components/MyCourseItem.jsx';

const MyCoursesScreen = () => {

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
