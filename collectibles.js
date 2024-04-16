const fs = require('fs');

function importar(marca) {
  const filePath = `./data/figuras.json`;
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

module.exports = importar;
