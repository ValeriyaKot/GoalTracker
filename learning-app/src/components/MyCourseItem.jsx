import React, { useState } from 'react';
import { MyCourseItemBox, MyCourseImageItem } from '../styles/GlobalStyles.js';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import * as Progress from "react-native-progress";

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



const MyCourseItem = () => {
    const [progress, setProgress] = useState(0.3); 
    const increaseProgress = () => {
        setProgress((prev) => Math.min(prev + 0.1, 1)); 
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <MyCourseItemBox>
                            <MyCourseImageItem source={require('../assets/_.jpeg')} />
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.text}>Art&Museums</Text>
                                <Text style={styles.textTitle}>{item.title}</Text>
                                <Text style={styles.percentage}>
                                    {Math.round(progress * 100)}%
                                </Text>
                                <Progress.Bar
                                    progress={progress} 
                                    width={150}
                                    height={3}
                                    color="#874ECF" 
                                    borderWidth={0} 
                                    unfilledColor="#D3D3D3"
                                    style={styles.progressBar} 
                                />
                            </View>
                        </MyCourseItemBox>
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
        marginVertical: 5,
    },
    text: {
        color: '#874ECF',
        fontSize: 12,
        marginHorizontal: 10
    },
    progressBar: {
        marginHorizontal: 10,
    },
    percentage: {
        fontSize: 12,
        marginHorizontal: 10,
        marginVertical: 5,
        color: '#874ECF',
      },


});

export default MyCourseItem;
