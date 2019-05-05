
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: "random description 1", status: false},
        {name: 'project 2', description: "random description 2", status: false},
        {name: 'project 3', description: "random description 3", status: false}
      ]);
    });
};
