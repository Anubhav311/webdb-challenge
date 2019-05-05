
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'name 1', description: 'random description 1', status: false},
        {name: 'name 2', description: 'random description 3', status: false},
        {name: 'name 3', description: 'random description 3', status: false},
      ]);
    });
};
