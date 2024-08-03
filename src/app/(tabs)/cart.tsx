import { View, Text, ScrollView } from "react-native";
import Title from "../../components/title";

import CartProduct from "../../components/cartProduct";

import { PRODUCTS } from "../../utils/products";
import { useEffect, useState } from "react";
import { ProductDisplayProps } from "../../components/productDisplay/product";
import Btn from "../../components/btn";

export default function Cart(){

    function getCartProducts(): ProductDisplayProps[]{
        return PRODUCTS.filter((product) => product.cartCount > 0)
    }

    function getTotalPrice(): number{
        let total = 0
        getCartProducts().map((product) => total += product.price)
        return total
    }

    const deliveryFee: number = 10.00

    return (
        <ScrollView className="px-6 bg-white">
            <Title content="Seu carrinho" />
            <View>
                <View>
                    {getCartProducts().map((product) => (
                        <CartProduct product={product} key={product.id} />
                    ))}
                </View>
                <View>
                    <View className="flex-row justify-between">
                        <Text>
                            {getCartProducts().length} produtos
                        </Text>
                        <Text>R${getTotalPrice()}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text>Frete</Text>
                        <Text>R${deliveryFee}</Text>
                    </View>
                    <View className="divide-solid border my-4">
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="font-bold">Total</Text>
                        <Text className="font-bold">R${getTotalPrice() + deliveryFee}</Text>
                    </View>
                </View>
                <Btn content="Finalizar compra" />
            </View>
        </ScrollView>
    )
}