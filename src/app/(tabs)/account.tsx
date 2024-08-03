import { View, Text, Image } from "react-native";
import Title from "../../components/title";
import AccountMenu from "../../components/accountMenu";

export default function Account(){
    return (
        <View className="px-6 bg-white h-screen">
            <Title content="Minha conta" />
            <View className="justify-center items-center mb-6">
                <Image
                    source={{
                        uri: "https://i.imgur.com/Gpoolv8.jpg"
                    }}
                    className="w-36 h-36 bg-black rounded-full mb-2"
                />
                <Text className="text-darkBlue text-2xl">João Gomes</Text>
            </View>
            <AccountMenu />
        </View>
    )
}