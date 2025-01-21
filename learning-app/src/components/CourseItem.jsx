import React from 'react';
import { CourseItemBox, CourseImageItem } from '../styles/GlobalStyles.js';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },

];

const CourseItem = ({ children }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <View>
                        <CourseItemBox>
                            <CourseImageItem source={require('../assets/_.jpeg')} />
                            <View style={{ marginVertical: 10}}>
                            <Text style={styles.text}>Art&Museums</Text>
                            <Text style={styles.textTitle}>{item.title}</Text>
                            {children} 
                            </View>
                        </CourseItemBox>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                nestedScrollEnabled={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'auto',
    },
    textTitle: {
        color: '#874ECF',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical:5,
    },
    text: {
        color: '#874ECF',
        fontSize: 12,
        marginHorizontal: 10
    },
    
    
});

export default CourseItem;
