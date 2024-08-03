import { View, Image, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ProductDisplayProps } from "../productDisplay/product";
import { theme } from "../../theme";

export default function CartProduct({ product }: { product: ProductDisplayProps }){

    const categories = {
        laptop: "Notebooks",
        phone: "Celulares",
        accessories: "Acessórios"
    }

    return (
        <View className="flex-row justify-between bg-white rounded-xl mb-4">

            <View className="flex-row">
                <Image source={{
                    uri: product.cartImg
                }} className="w-20 h-20 mr-2 rounded-tr-2xl rounded-bl-2xl" />
                <View className="gap-2">
                    <Text className="font-bold">{ product.name }</Text>
                    <Text>{product.brand}</Text>
                    <Text className="font-bold">R${product.price}</Text>
                </View>
            </View>
            
            <View className="bg-lightBlue items-center justify-center justify-around p-1 rounded-xl border border-darkBlue">
                <AntDesign name="plus" size={16} color={theme.colors.darkBlue} />
                <Text className="text-darkBlue">{product.cartCount}</Text>
                <FontAwesome6 name="minus" size={16} color={theme.colors.darkBlue} />
            </View>

        </View>
    )
}