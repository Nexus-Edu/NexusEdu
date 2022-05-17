/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {hashtag: '#welcomeMessage', username: 'example', message: 'Hello NexusEdu Community' },
      { hashtag: '#education', username: 'example2', message: 'Education for all'}, 
      { hashtag: '#MarcyLab', username: 'example3', message: 'Marcy Lab is cool'}, 
      { hashtag: '#elements', username: 'example4', message: 'Elements of the world, unite'}
  ]);
};
