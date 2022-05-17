/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id', {primaryKey:true});
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      // table.integer('post_id').references('id').inTable('posts').notNullable(); 
      // table.integer('comment_id').references('id').inTable('comments').notNullable(); 
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.integer('age')
      table.date('birthday')
      table.string('image')
      table.string('bio')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
