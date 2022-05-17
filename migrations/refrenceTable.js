/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('referencetable', table => {

    table.integer('post_id').notNullable();
    table.foreign('post_id').references('posts.id'); /// now every user 

    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id'); /// now every user 
    
    table.integer('comment_id').notNullable();
    table.foreign('comment_id').references('comments.id'); /// now every user 

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('referencetable')
};
