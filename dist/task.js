"use strict";
function formatString(input, toUpper) {
    if (toUpper == false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
function filterByRating(items) {
    return items.filter(item => (item.rating >= 4));
}
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return ({
            "Make": this.make,
            "Year": this.year
        });
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return ({ "Model": this.model });
    }
}
function processValue(value) {
    if (typeof value == "string") {
        return (value === null || value === void 0 ? void 0 : value.length);
    }
    else {
        return (value * 2);
    }
}
function getMostExpensiveProduct(products) {
    if ((products === null || products === void 0 ? void 0 : products.length) < 1) {
        return null;
    }
    else {
        return products.reduce((max, product) => product.price > max.price ? product : max);
    }
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === (Day === null || Day === void 0 ? void 0 : Day.Sunday)) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
