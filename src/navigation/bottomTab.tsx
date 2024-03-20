import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/dashboard/dashboard';
import ProfileScreen from '../screens/dashboard/profile';
import ScanScreen from '../screens/dashboard/scan';
import WalletScreen from '../screens/dashboard/wallet';
import {
  ProfileBottomIcon,
  ScanBottomIcon,
  ShipmentBottomIcon,
  WalletBottomIcon,
} from '../assets/icons/dashboardIcon';
import {appColors} from '../utils/colors';

const Tab = createBottomTabNavigator();

export default function AppBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.black300,
      }}>
      <Tab.Screen
        name="Shipment"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ShipmentBottomIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ScanBottomIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <WalletBottomIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileBottomIcon fill={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
