import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import CartScreen from './Cart';
import TransactionScreen from './Transaction';
import ProfileScreen from './Profile';
import Icon from 'components/Icon';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      style={{container: {backgroundColor: 'green'}}}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#999999',
        // inactiveBackgroundColor: 'red',
        // activeBackgroundColor: 'transparent',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="Home" fill={color} height={size} width={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="Cart" fill={color} height={size} width={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="Exchange"
              fill={color}
              height={size * 1.2}
              width={size * 1.2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="Me" fill={color} height={size} width={size} />
          ),
          tabBarBadge: '10',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
