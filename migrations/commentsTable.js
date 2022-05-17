/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('comments', table => {
      table.increments('id', {primaryKey:true});

      table.integer('post_id').notNullable();
      table.foreign('post_id').references('posts.id'); /// now every user

      table.integer('user_id').notNullable();
      table.foreign('user_id').references('users.id'); /// now every user


    //   table.string('username').notNullable();
    //   table.string('name').notNullable();
    //   table.string("image");
      table.string('comment').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('comments')
  };