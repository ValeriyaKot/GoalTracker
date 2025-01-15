import React from 'react';
import { AccountButton, AccountButtonText} from '../styles/GlobalStyles.js';
import { FlatList, View, Text, StyleSheet, Dimensions, Platform } from 'react-native';


import { Ionicons } from '@expo/vector-icons';

const data = [
    { id: '1', title: 'Account settings' },
    { id: '2', title: 'Notifications settings' },
    { id: '3', title: 'Privacy & Policy' },
    { id: '4', title: 'Help Center' },
    { id: '5', title: 'About us' },
];

const AccountButtomItem = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'column'}}>
                        <AccountButton title={item.title} style={{flexDirection: 'row', justifyContent: 'space-between',}}  >
                            <AccountButtonText>{item.title}</AccountButtonText>
                            <Ionicons name='chevron-forward-outline' size={20} color='#874ECF' />
                        </AccountButton>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                nestedScrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'auto',
    },

});

export default AccountButtomItem;
