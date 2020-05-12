import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
export default function Main({ navigation }) {
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Heroes')}
                title="Launch Heroes"
                color="#3399CC"
            />
        </View>
    )
}