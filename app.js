const importar = require('./collectibles');

const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

const collectibles = {
  figuras: unifiedCollectibles,
  listFigures() {
    this.figuras.forEach(figure => {
      console.log(`Marca: ${figure.marca}, Nombre: ${figure.nombre}, Precio: ${figure.precio}, Stock: ${figure.stock}`);
    });
  },
  figuresByBrand(brand) {
    return this.figuras.filter(figure => figure.marca === brand);
  }
};

console.log('Todas las figuras:');
collectibles.listFigures();

console.log('Figuras de Star Wars:');
console.log(collectibles.figuresByBrand('Star Wars'));
