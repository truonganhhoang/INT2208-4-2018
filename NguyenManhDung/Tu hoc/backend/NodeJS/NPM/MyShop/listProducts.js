var faker = require("faker");

console.log("=========================\n" +
            "WELCOME TO MY SHOP!\n" +
            "=========================");
for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}