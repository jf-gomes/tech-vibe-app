export interface CategoryProps{
    id: string,
    text: string,
    label: string
}

export const CATEGORIES: CategoryProps[] = [
    {
        id: "0",
        text: "all",
        label: "Tudo"
    },
    {
        id: "1",
        text: "laptop",
        label: "Notebooks"
    },
    {
        id: "2",
        text: "phone",
        label: "Celulares"
    },
    {
        id: "3",
        text: "accessories",
        label: "Acessórios"
    }
]