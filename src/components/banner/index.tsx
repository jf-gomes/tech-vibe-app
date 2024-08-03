import { View, Image } from "react-native"

export default function Banner(){
    return (
        <View className="px-6">
            <Image source={require("../../../assets/banner_img.png")} resizeMode="cover" className="w-full h-36 md:h-60 rounded-2xl" />
        </View>
    )
}