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
        <ScrollView className="mx-6">
            <Title content="Seu carrinho" />
            <View>
                {getCartProducts().map((product) => (
                    <CartProduct product={product} />
                ))}
            </View>
            <View className="flex-row justify-between">
                <Text className="text-xl">
                    {getCartProducts().length} produtos
                </Text>
                <Text className="text-xl">R${getTotalPrice()}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-xl">Frete</Text>
                <Text className="text-xl">R${deliveryFee}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-bold text-xl">Total</Text>
                <Text className="font-bold text-xl">R${getTotalPrice() + deliveryFee}</Text>
            </View>

            <Btn content="Finalizar compra" />
        </ScrollView>
    )
}