import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './main'
import Heroes from './heores'
const { Navigator, Screen } = createStackNavigator()


export default function AppWrapper() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Home'>
                <Screen name='Home' component={Main} />
                <Screen name='Heroes' component={Heroes} />
            </Navigator>
        </NavigationContainer>
    )
}