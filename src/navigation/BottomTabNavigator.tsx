import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import homeIcon from '../assets/home.png';
import medicationIcon from '../assets/medical-circle.png';
import consultationIcon from '../assets/telehealth.png';
import healthIcon from '../assets/bar-chart-square-plus.png';
import profileIcon from '../assets/user.png';
import profileIconActive from '../assets/user-circle.png';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = homeIcon;
                    } else if (route.name === 'MedicationInfo') {
                        iconName = medicationIcon;
                    } else if (route.name === 'Consultation') {
                        iconName = consultationIcon;
                    } else if (route.name === 'Health') {
                        iconName = healthIcon;
                    } else if (route.name === 'Profile') {
                        iconName = focused ? profileIconActive : profileIcon;
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            {focused && <View style={{ height: 2, backgroundColor: '#3c6ce7', width: '100%', marginBottom: 4 }} />}
                            <Image source={iconName} style={{ width: 24, height: 24 }} />
                        </View>
                    );
                },
                tabBarActiveTintColor: '#3c6ce7',
                tabBarInactiveTintColor: '#888',
                tabBarLabelStyle: { fontSize: 12, fontFamily: 'Kanit-Regular' },
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'หน้าหลัก',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="MedicationInfo"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'ข้อมูลยา',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Consultation"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'ปรึกษา',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Health"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'สุขภาพ',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'โปรไฟล์',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
