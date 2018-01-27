
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', function (table) {
    table.increments()
    table.string('name')
    table.string('link')
    table.string('description')
    table.string('image')
    table.string('source')
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources')
};
