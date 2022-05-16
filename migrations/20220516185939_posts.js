/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id').primary();
    table.integer('comment_id').references('id').inTable('comments').notNullable();
    table.string('hashtag');
    table.date('date');
    table.string('username');
    table.string('message').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('posts')
};
