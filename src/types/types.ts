export type User = {
    id: string
    displayName: string
    createdAt: Date
    email: string
}

export type Directory = {
    id: number
    title: string
    imageUrl: string
    linkUrl: string
    size?: string
}

export type Collection = {
    id: number,
    title: string,
    routeName: string,
    items: Product[]
}

export type Product = {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export type CartProduct = {
    product: Product
    quantity: number
}