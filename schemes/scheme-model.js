const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    // findSteps,
    add,
    remove
}

function find() {
   return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
}

// function findSteps(id) {
//     return db('schemes')
//     .join('steps')
// }

function add(scheme) {
    return db('schemes').insert(scheme, 'id')
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}