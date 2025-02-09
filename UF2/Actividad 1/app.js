// console.log("Hola món!");

/* const path = require('path');

data_folder = 'data/';
products_folder = 'products/';
products_file = 'products.json';

const full_path = path.join(data_folder, products_folder, products_file);
console.log(full_path); */

const path = require('path');

data_folder = 'data/';
products_folder = 'products/';
products_file = 'products.json';

const full_path = path.resolve(data_folder, products_folder, products_file);
console.log(full_path);