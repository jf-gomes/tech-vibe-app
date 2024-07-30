import { View } from "react-native";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return (
        <View style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tabs.Screen
                    name="index"
                />
                <Tabs.Screen
                    name="cart"
                />
                <Tabs.Screen
                    name="account"
                />
            </Tabs>
        </View>
    )
}