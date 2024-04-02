function make_Sandwich(items: string[], sandwich: string) {
    console.log(`I would like ${items.join(', ')} on my ${sandwich}.`);
}

make_Sandwich(["Tomato"], "sandwich");
make_Sandwich(["Lettuce", "onion", "chicken"], "sandwich");
make_Sandwich (["Lettuce", "onion", "chicken", "cheese"] , "sandwich");