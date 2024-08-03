import { View, Text } from "react-native";

import { theme } from "../../theme";

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header(){
    return (
        <View className="justify-center m-6">
            <View className="flex-row justify-between">
                <View className="flex-row items-center gap-4">
                    <FontAwesome name="user-circle-o" size={30} color={theme.colors.darkBlue} />
                    <Text className="text-xl">João Gomes</Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <FontAwesome name="bell" size={30} color={theme.colors.darkBlue} />
                    <FontAwesome name="sign-out" size={30} color={theme.colors.darkBlue} />
                </View>
            </View>
            
        </View>
    )
}