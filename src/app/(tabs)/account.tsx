import { View, Text, Image } from "react-native";
import Title from "../../components/title";
import AccountMenu from "../../components/accountMenu";

export default function Account(){
    return (
        <View className="mx-6">
            <Title content="Minha conta" />
            <View className="justify-center items-center mb-6">
                <Image
                    source={require('../../../assets/iphone.png')}
                    className="w-36 h-36 bg-black rounded-full"
                />
                <Text className="text-green text-2xl">João Gomes</Text>
            </View>
            <AccountMenu />
        </View>
    )
}