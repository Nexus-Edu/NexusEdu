/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Populate the users table
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, username: 'example', password: 'password', email: 'example@example.com', first_name: 'Jason', last_name: 'Padilla', age: 18, birthday: '2008-11-11', image: 'https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592449?k=20&m=1327592449&s=612x612&w=0&h=6yFQPGaxmMLgoEKibnVSRIEnnBgelAeIAf8FqpLBNww=', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur rerum, magni in provident ipsam quam corporis odio quia nam necessitatibus labore. Vel, sed atque?' }
  ]);

    // Populate the posts table
  await knex('posts').del()
  await knex('posts').insert([
    {post_id: 1, hashtag: '#welcomeMessage', date: '2022-12-05', username: 'example', message: 'Hello NexusEdu Community' }
  ])

    // Populate the comments table
  await knex('comments').del()
  await knex('comments').insert([
    { comment_id: 1, username: 'example', date: '2022-12-05', comment: 'Hello example'}
  ])
};
