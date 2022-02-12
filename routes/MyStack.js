//Trying to figure out routing lolz

import {createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../login-page/LoginPage';
import SignUpPage from '../signup-page/SignUpPage';
import React from 'react';
import { Stack } from '@mui/material';
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Sign up' component={SignUpPage} />
            <Stack.Screen name='Sign up' component={SignUpPage} />
        </Stack.Navigator>
    )
}