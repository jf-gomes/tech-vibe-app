import { Text } from "react-native"

export default function Title({ content }: { content: string }){
    return (
        <Text className="font-bold text-2xl">{ content }</Text>
    )
}