import { View, Text, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ProductDisplayProps } from "../../../types/product";
import { theme } from "../../theme";

export default function ProductDisplay({ product }: {product: ProductDisplayProps}){

    return (
        <View className="mb-6">
            <View className="items-end mr-6 p-4 rounded-xl w-40 mb-2 bg-white">
                <FontAwesome name="heart" size={20} color={theme.colors.darkBlue} className="float-right" />
                <View className="h-40 w-32 bg-white">
                    <Image source={{
                        uri: product.img
                    }} className="h-40 w-32" />
                </View>
                
            </View>
            <View>
                <Text className="font-bold">{product.name}</Text>
                <Text>R${product.price}</Text>
            </View>
        </View>
        
    )
    
}