import { View, Text, Image } from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { ProductDisplayProps } from "./product";

export default function ProductDisplay({ product }: {product: ProductDisplayProps}){

    if (product.category){
        return (
            <View className="items-end mr-6 bg-white p-4 rounded-xl w-40 mb-6">
                <FontAwesome name="heart" size={20} color="black" className="float-right" />
                <View>
                    <Image source={require('../../../assets/macbook.jpg')} className="h-32 w-32" />
                    <Text className="text-xl text-green font-bold">R${product.price}</Text>
                    <Text className="text-md">{product.name}</Text>
                </View>
                
            </View>
        )
    } else {
        return (
            <View className="items-end mr-6 bg-white p-4 rounded-xl w-40">
                <FontAwesome name="heart" size={20} color="black" className="float-right" />
                <View>
                    <Image source={require('../../../assets/macbook.jpg')} className="h-32 w-32" />
                    <Text className="text-xl text-green font-bold">R${product.price}</Text>
                    <Text className="text-md">{product.name}</Text>
                </View>
                
            </View>
        )
    }
    
}