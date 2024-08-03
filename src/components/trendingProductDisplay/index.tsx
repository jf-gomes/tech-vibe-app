import { Image, Pressable, Text, View } from "react-native"
import { ProductDisplayProps } from "../../../types/product"

export default function TrendingProductDisplay({ product }: {product: ProductDisplayProps}){
    return (
        <View className="flex-row bg-white mr-6 items-center rounded-3xl pr-6">
            <Image source={{
                uri: product.img
            }} className="w-40 h-40 rounded-3xl" />
            <View>
                <Text className="font-bold">{product.name}</Text>
                <Text>{product.brand}</Text>
                <Text className="font-bold">R${product.price}</Text>
                <Pressable className="bg-black rounded h-6 w-28 justify-center mt-2">
                    <Text className="text-white text-center">Comprar agora</Text>
                </Pressable>
            </View>
        </View>
    )
}