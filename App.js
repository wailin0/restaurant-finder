import SearchScreen from "./src/screens/SearchScreen";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Search"
            screenOptions={{gestureEnabled: false}}
        >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{title: 'Search restaurant'}}
            />
            <Stack.Screen
                name="ResultsShow"
                component={ResultsShowScreen}
                options={{title: 'Restaurant details'}}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    )
}