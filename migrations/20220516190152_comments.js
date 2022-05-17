/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('comments', table => {
      table.increments('id', {primaryKey:true});
      table.string('username').notNullable;
      table.string('name').notNullable;
      table.string("image");
      table.string('comment').notNullable;
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