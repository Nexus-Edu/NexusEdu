/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id', {primaryKey:true});
    // table.integer('comment_id').references('id').inTable('comments').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id').onDelete("CASCADE"); /// now every user 

    table.string('hashtag');
    table.timestamp('date').defaultTo(knex.fn.now());
    // table.string('username').notNullable();
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
