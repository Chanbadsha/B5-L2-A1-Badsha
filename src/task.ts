function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == false) {
        return input.toLowerCase()
    } else {
        return input.toUpperCase()
    }
}



type productListType = {
    title: string,
    rating: number,
}
function filterByRating(items: productListType[]): productListType[] {
    return items.filter(item => (item.rating >= 4))
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}

