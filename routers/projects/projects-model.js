const db = require('../../data/dbConfig');
const knex = require('knex');

  
function find() {
    return db('projects');
}

function findById(id) {
    console.log(db('projects.id'))
    return db('projects').innerJoin('actions', 'projects.id', 'actions.project_id')

    // return db('projects')
    //     .select('projects.name', 'actions.description')
    //     .innerJoin('actions', 'projects.id', 'actions.project_id')
    //     .where({ id: id })
    //     .first();
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('projects')
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
    return db('projects')
        .where({ id })
        .del();
}

function getWithActions(id) {
    return db('projects')
        .innerJoin('actions', 'projects.id', 'actions.project_id')
        .where({ id })
        // .select('projects', 'actions')
        // .first();
}

function findWithActions(id) {
    return db('projects')
        .where({ id })
        .first();

    return db('actions')
        .where({ project_id })
        // .first();
        
}

// router.getWithStudents('/:id/students', (req, res) => {
//     return db('cohorts')
//       .join('students', 'cohorts.id', 'students.cohort_id')
//       .select('students.id', 'students.name')
//       .then(response => {
//           res.status(200).json(response)
//       })
// })


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getWithActions,
    findWithActions,
};
