import { Image, ScrollView, Text, View } from "react-native"
import { ProductDisplayProps } from "../../../types/product"
import { PRODUCTS } from "../../utils/products"
import Btn from "../../components/btn"

export default function Product(){

    const product: ProductDisplayProps = PRODUCTS[0]

    return (
        <ScrollView className="bg-white h-screen">
            <Image source={{
                uri: product.img
            }} className="h-80" />
            <View className="bg-lightBlue rounded-tl-3xl rounded-tr-3xl shadow p-6">
                <View className="gap-4 mb-6">
                    <Text className="text-2xl font-bold">{product.name}</Text>
                    <Text className="text-xl">R${product.price}</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore commodi fugiat iusto nisi magnam maiores. Sequi laudantium dignissimos adipisci a iure quas sit non deleniti. Neque optio dolore maiores?</Text>
                </View>
                <View>
                    <Text className="text-xl font-bold mb-6">Cores disponíveis</Text>
                    <View className="flex-row gap-2">
                        <Image source={require("../../../assets/ellipse_light_gray.png")} />
                        <Image source={require("../../../assets/ellipse_dark_gray.png")} />
                        <Image source={require("../../../assets/ellipse_pink.png")} />
                    </View>
                </View>
                <Btn content="Adicionar ao carrinho" />
            </View>
            
        </ScrollView>
    )
}