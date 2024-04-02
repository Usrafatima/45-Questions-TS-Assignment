function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Honda", "Civic", ["color", "Silver"], ["year", 2019]));
console.log(make_car("Audi", "A4", ["color", "grey"], ["year",2022]));

