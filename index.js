class ProductManager {
  products;
  static id = 1;
  constructor(tittle, description, price, thumbnail, code, stock) {
    ProductManager.id += 0;
    this.products = [];
    this.tittle = tittle;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  addProduct(product) {
    product = { ...product, id: ProductManager.id };
    let assignedCode = this.products.find(
      (product) => product.code === this.code
    );
    if (assignedCode) {
      return console.log("El producto ya existe");
    } else {
      this.products.push(product);
      ProductManager.id++;
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let searchID = id;
    let myProduct = null;
    this.products.forEach((product) => {
      if (product.id === searchID) {
        myProduct = product;
      }
    });
    if (myProduct === null) {
      return console.log('El id', searchID, 'no ha sido hallado');
    } else {
      return console.log('El id', searchID, 'corresponde al siguiente al producto ', myProduct.tittle);
    }
  }
}

const productList = new ProductManager();

const product1 = {
  tittle: "Mate",
  description: "Mate de madera",
  price: 58,
  thumbnail: "www.mate.com/img1",
  code: 10,
  stock: 12,
};

const product2 = {
  tittle: "Vaso",
  description: "Vaso de plastico",
  price: 30,
  thumbnail: "www.mate.com/img2",
  code: 10, // repeated code to force duplicated code message
  stock: 20,
};

productList.addProduct(product1);
productList.addProduct(product2);

console.log(productList.getProducts());
//console.log(productList.getProductById(2));
