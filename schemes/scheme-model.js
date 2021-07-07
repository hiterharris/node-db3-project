const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
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

function findSteps(id) {
    return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select('steps.*')
    .where('scheme_id', id)
}

function add(scheme) {
    return db('schemes').insert(scheme, 'id')
}

function update(id, changes) {
    return db('scheme')
      .where({ id })
      .update(changes);
  }

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}