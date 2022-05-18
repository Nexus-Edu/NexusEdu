/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('referencetable').del()
  await knex('referencetable').insert([
    {post_id: 1, user_id: 1, comment_id:1},
    {post_id: 1, user_id: 1, comment_id:2},
    {post_id: 2, user_id: 1, comment_id:3},
  ]);
};
