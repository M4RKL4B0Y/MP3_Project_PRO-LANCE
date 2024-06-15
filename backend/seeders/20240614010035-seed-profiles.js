'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        name: 'John Doe',
        title: 'Software Developer',
        freelancer_id: 10,  
        Trade_offering: 'Web Development',
        Skills: 'JavaScript, React, Node.js',
        Experience: '5 years',
        Location: 'New York, NY',
        Languages: 'English, Spanish',
        Contact: 'email@example.com',
        image: 'profile1.jpg'
      },
      {
        name: 'Jane Smith',
        title: 'Graphic Designer',
        freelancer_id: 21,  
        Trade_offering: 'Graphic Design',
        Skills: 'Photoshop, Illustrator, InDesign',
        Experience: '3 years',
        Location: 'San Francisco, CA',
        Languages: 'English',
        Contact: 'designer@example.com',
        image: 'profile2.jpg'
      },
      {
        name: 'Alice Johnson',
        title: 'Content Writer',
        freelancer_id: 31,  
        Trade_offering: 'Writing and Editing',
        Skills: 'Copywriting, SEO, Blogging',
        Experience: '4 years',
        Location: 'Austin, TX',
        Languages: 'English',
        Contact: 'writer@example.com',
        image: 'profile3.jpg'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
