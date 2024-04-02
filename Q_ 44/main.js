function make_Sandwich(items, sandwich) {
    console.log("I would like ".concat(items.join(', '), " on my ").concat(sandwich, "."));
}
make_Sandwich(["Tomato"], "sandwich");
make_Sandwich(["Lettuce", "onion", "chicken"], "sandwich");
make_Sandwich(["Lettuce", "onion", "chicken", "cheese"], "sandwich");
