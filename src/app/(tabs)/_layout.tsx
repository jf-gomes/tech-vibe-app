import { View } from "react-native";
import { Tabs } from "expo-router";
import { theme } from "../../theme";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout(){
    return (
        <View style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.darkBlue,
                    tabBarInactiveTintColor: theme.colors.black,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 70,
                        padding: 16,
                        borderTopColor: "black"
                    }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ size, color }) => (<FontAwesome6 name="house" size={size} color={color} />)
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        tabBarIcon: ({ size, color }) => (<FontAwesome6 name="cart-shopping" size={size} color={color} />)
                    }}
                />
                <Tabs.Screen
                    name="wishlist"
                    options={{
                        tabBarIcon: ({ size, color }) => (<FontAwesome6 name="heart" size={size} color={color} />)
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        tabBarIcon: ({ size, color }) => (<FontAwesome6 name="user-circle" size={size} color={color} />)
                    }}
                />
                <Tabs.Screen
                    name="product"
                    options={{
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                      }}
                />
            </Tabs>
        </View>
    )
}