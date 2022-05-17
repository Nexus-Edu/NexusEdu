/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
     { post_id: 1, username: 'example', name:"leo", comment: 'Hello example'}, 
    { post_id: 1, username: 'example2', name:"leo", comment: 'Hello example2'},
    { post_id: 2, username: 'example3', name:"jay", comment: 'Hello example3'}, 
    { post_id: 2, username: 'example4', name:"jay", comment: 'Hello example4'}, 
    { post_id: 3, username: 'example5',  name:"eli", comment: 'Hello example5'}, 
    { post_id: 3, username: 'example5', name:"eli", comment: 'Hello example6'}, 
    { post_id: 4, username: 'example7', name:"shav", comment: 'Hello example7'}, 
    { post_id: 4, username: 'example8', name:"shav", comment: 'Hello example8'}
  ]);
};
