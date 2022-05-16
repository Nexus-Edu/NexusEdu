/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Populate the users table
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'example', password: 'password', email: 'example@example.com', first_name: 'Jason', last_name: 'Padilla', age: 18, birthday: '2008-11-11', image: 'https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww=', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur rerum, magni in provident ipsam quam corporis odio quia nam necessitatibus labore. Vel, sed atque?' }
  ]);

    // Populate the posts table
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, hashtag: '#welcomeMessage', date: '2022-12-05', username: 'example', message: 'Hello NexusEdu Community' },
    {id: 2, hashtag: '#education', date: '2022-12-05', username: 'example2', message: 'Education for all'}, { id: 3, hashtag: '#MarcyLab', date: '2022-12-05', username: 'example3', message: 'Marcy Lab is cool'}, { id: 4, hashtag: '#elements', date: '2022-12-05', username: 'example4', message: 'Elements of the world, unite'}
  ])

    // Populate the comments table
  await knex('comments').del()
  await knex('comments').insert([
    { id: 1, username: 'example', date: '2022-12-05', comment: 'Hello example'}, { id: 2, username: 'example2', date: '2022-12-05', comment: 'Hello example2'},
    { id: 3, username: 'example3', date: '2022-12-05', comment: 'Hello example3'}, { id: 4, username: 'example4', date: '2022-12-05', comment: 'Hello example4'}, { id: 5, username: 'example5', date: '2022-12-05', comment: 'Hello example5'}, { id: 6, username: 'example5', date: '2022-12-05', comment: 'Hello example6'}, { id: 7, username: 'example7', date: '2022-12-05', comment: 'Hello example7'}, { id: 8, username: 'example8', date: '2022-12-05', comment: 'Hello example8'}
  ])
};
