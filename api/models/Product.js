/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Products',
  attributes: {
    nombre: {type: 'string', required: true},
    descripcion: {type: 'string', required: true},
    codigo: {type: 'string', required: true},
    precio: {type: 'number', required: true},
    stock: {type: 'number', required: true},
    foto: {type: 'string', required: true}
  }
};

