import { View, Text, Image } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { ProductDisplayProps } from "./product";

export default function ProductDisplay({ product }: {product: ProductDisplayProps}){

    return (
        <View className="items-end">
            <FontAwesome name="heart" size={20} color="black" className="float-right" />
            <View>
                <Image source={require('../../../assets/macbook.jpg')} className="h-32 w-32" />
                <Text className="text-xl text-green font-bold">R${product.price}</Text>
                <Text className="text-md">{product.name}</Text>
            </View>
            
        </View>
    )
}