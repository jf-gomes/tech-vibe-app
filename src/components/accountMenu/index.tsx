import { View, Text } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { theme } from "../../theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const MenuOption = ({ iconName, text }: { iconName: string, text: string }) => {
    return (
        <View className="flex-row justify-between my-4">
            <View className="flex-row gap-6 items-center">
                {iconName != "info" ? <FontAwesome6 name={iconName} size={30} color={theme.colors.green} /> : <Feather name="info" size={30} color={theme.colors.green} />}
                <Text className="text-xl">{ text }</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
        </View>
    )
}

export default function AccountMenu(){
    return (
        <View>
            <MenuOption iconName="user-circle" text="Informações pessoais" />
            <MenuOption iconName="bell" text="Notificações" />
            <MenuOption iconName="info" text="Central de ajuda" />
            <MenuOption iconName="phone-flip" text="Contato" />
            <MenuOption iconName="power-off" text="Sair" />
        </View>
    )
}