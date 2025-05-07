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



class Vehicle {
    private make: string
    private year: number

    constructor(make: string, year: number) {
        this.make = make
        this.year = year
    }
    getInfo() {
        return ({
            "Make": this.make,
            "Year": this.year
        })
    }
}

class Car extends Vehicle {
    private model: string

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        return ({ "Model": this.model })
    }

}



function processValue(value: string | number): number {
    if (typeof value == "string") {
        return (value.length)
    } else {
        return (value * 2)
    }
}
