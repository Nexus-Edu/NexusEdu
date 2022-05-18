/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {hashtag: '#welcomeMessage', user_id: 1, message: 'Hello NexusEdu Community' },
      { hashtag: '#education', user_id: 1, message: 'Education for all'}, 
      // { hashtag: '#MarcyLab', user_id: 1, message: 'Marcy Lab is cool'}, 
      // { hashtag: '#elements', user_id: 1, message: 'Elements of the world, unite'}
  ]);
};
