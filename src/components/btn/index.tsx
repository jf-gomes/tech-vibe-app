import { TouchableOpacity, Text } from "react-native";

export default function Btn({ content }: { content: string }){
    return (
        <TouchableOpacity className="bg-black h-16 rounded-2xl items-center justify-center mt-6">
            <Text className="text-white text-xl">{ content }</Text>
        </TouchableOpacity>
    )
}