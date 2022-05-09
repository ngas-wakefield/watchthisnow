exports.up = function(knex) {
      return knex.schema.createTable('movies', function (table) {
          table.increments('id').primary()
          table.string('title')
          table.string('img')
          table.string('imdb_id')
          table.boolean('watched')
      })
};


exports.down = function(knex) {
    return knex.schema.dropTable('movies')
}

