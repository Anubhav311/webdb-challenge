const db = require('../../data/dbConfig');

  
function find() {
    return db('actions');
}

function findById(id) {
    return db('actions')
        .where({ id })
        .first();
}

function add(dish) {
    return db('actions')
        .insert(dish, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('actions')
        .where({ id })
        .del();
}


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};
