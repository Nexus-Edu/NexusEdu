/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('user_id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.foreign('post_id'); 
      table.foreign('comment_id'); 
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.integer('age').notNullable();
      table.date('birthday').notNullable();
      table.string('image').notNullable();
      table.string('bio').notNullable();
  })
  /*
    The username should be `foregin` as a post is created by the user. For now, we'll hardcode the username
  */
  .createTable('posts', table => {
    table.increments('post_id');
    table.foreign('comment_id');
    table.string('hashtag');
    table.date('date');
    table.string('username');
    table.string('message').notNullable();
  })
  .createTable('comments', table => {
    table.increments('comment_id');
    table.foreign('post_id');
    table.string('username');
    table.date('date');
    table.string('comment');
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('posts').dropTable('comments');
};
