import { View, Image, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ProductDisplayProps } from "../productDisplay/product";

export default function CartProduct({ product }: { product: ProductDisplayProps }){

    const categories = {
        laptop: "Notebooks",
        phone: "Celulares",
        accessories: "Acessórios"
    }

    return (
        <View className="flex-row justify-between bg-white p-4 rounded-xl mb-6">

            <View className="flex-row">
                <Image source={require("../../../assets/macbook.jpg")} className="w-28 h-28 mr-2" />
                <View className="gap-2">
                    <Text className="text-darkBlue font-bold">{ product.name }</Text>
                    <View className="bg-gray rounded w-20">
                        <Text className="text-white text-center">{categories[product.category as keyof typeof categories]}</Text>
                    </View>
                    <Text>R${product.price}</Text>
                </View>
            </View>
            
            <View className="bg-lightBlue items-center justify-center justify-around p-1 rounded-xl">
                <AntDesign name="plus" size={24} color="white" />
                <Text className="text-white">1</Text>
                <FontAwesome6 name="minus" size={24} color="white" />
            </View>

        </View>
    )
}