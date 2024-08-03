import { TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "../../theme";

export default function SearchBar(){
    return (
        <View className="flex-row border border-darkBlue mx-6 mt-6 rounded-3xl items-center pl-4 bg-superLightBlue">
            <AntDesign name="search1" size={24} color={theme.colors.darkBlue} />
            <TextInput placeholder="Buscar produtos" className="p-4" placeholderTextColor={theme.colors.darkBlue} />
        </View>
    )
}