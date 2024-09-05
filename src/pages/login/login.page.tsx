
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HOME_ROUTE } from '../../navigation/route';

const LoginPage = ({ navigation }:any) => {
    return (
        <View style={styles.container}>
            <Button title='To Home' onPress={() => {
                navigation.navigate(HOME_ROUTE)
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LoginPage;