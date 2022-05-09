exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, 
          title: 'Inception',
          img: 'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
          imdb_id: 'tt1375666',
          watched: false
        },
        {id: 2, 
          title: 'Psycho',
          img: 'https://imdb-api.com/images/original/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg',
          imdb_id: 'tt0054215',
          watched: false
        },

      ]);
    });
};