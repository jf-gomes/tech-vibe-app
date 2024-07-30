import { View, Text, FlatList } from "react-native"

interface CategoryProps{
    id: string,
    label: string
}

export default function CategorySelector(){

    const categories: CategoryProps[] = [
        {
            id: "0",
            label: "Tudo"
        },
        {
            id: "1",
            label: "Notebooks"
        },
        {
            id: "2",
            label: "Celulares"
        },
        {
            id: "3",
            label: "Acessórios"
        }
    ]

    const RenderCategory = ({ category }: {category: CategoryProps}) => {
        return (
            <View className={category.id == "0" ? "bg-black rounded w-24 mr-2" : "bg-green rounded w-24 mr-2"}>
                <Text className="text-white rounded mx-2 text-center py-2">{ category.label }</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                data={categories}
                renderItem={({item}) => <RenderCategory category={item} />}
                horizontal
            />
        </View>
    )
}