// Task 1

let products = [
    {name: "Laptop", price: "1200", category: "Electronics"},
    {name: "Phone", price: 800, category: "Electronics"},
];

//function getProductsByCategory(product_array, category) {
//    return product_array.filter(product => product.category === category);
//};
//console.log(getProductsByCategory(products, "Electronics"));

//Task 2

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }

    ))
    
};

console.log(applyDiscount(products, .1));

// 