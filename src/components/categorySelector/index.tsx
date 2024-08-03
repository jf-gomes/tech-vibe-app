import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { CategoryProps } from "../../../types/category"
import { CATEGORIES } from "../../utils/categories"

export default function CategorySelector({ setSelectedCategory }: { setSelectedCategory: any }){

    const RenderCategory = ({ category }: {category: CategoryProps}) => {
        return (
            <TouchableOpacity className={category.id == "0" ? "bg-black rounded w-24 mr-2" : "bg-darkBlue rounded w-24 mr-2"} onPress={() =>{
                setSelectedCategory(category.text)
            }}>
                <Text className="text-white rounded mx-2 text-center py-2">{ category.label }</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View className="mb-6">
            <FlatList 
                data={CATEGORIES}
                renderItem={({item}) => <RenderCategory category={item} />}
                horizontal
            />
        </View>
    )
}