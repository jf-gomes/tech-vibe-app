import { View } from "react-native";
import Title from "../title";
import CategorySelector from "../categorySelector";

export default function CategoryProducts(){
    return (
        <View className="mx-6">
            <Title content="Categorias" />
            <CategorySelector />
        </View>
    )
}