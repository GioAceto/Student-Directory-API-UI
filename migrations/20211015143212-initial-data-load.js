'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [

      {
        name: 'Emily',
        age: '20',
        address: 'Salem, MA',
        gpa: '3.70',
        major: 'Biochemistry',
        image: 'https://i.imgur.com/hsN3xCu.png'
      },
      {
        name: 'Fiona',
        age: '21',
        address: 'Providence, RI',
        gpa: '3.82',
        major: 'Psychology',
        image: 'https://i.imgur.com/cQLh9oH.png'
      },
      {
        name: 'Travis',
        age: '20',
        address: 'Keene, NH',
        gpa: '3.50',
        major: 'Mechanical Engineering',
        image: 'https://i.imgur.com/xFLGFzw.png'
      },
      {
        name: 'Chloe',
        age: '22',
        address: 'Bridgeport, CT',
        gpa: '3.28',
        major: 'Political Science',
        image: 'https://i.imgur.com/iwR2j3X.png'
      },
      {
        name: 'Maya',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.80',
        major: 'Graphic Design',
        image: 'https://i.imgur.com/XUinfsI.png'
      },
      {
        name: 'Michael',
        age: '20',
        address: 'Boston, MA',
        gpa: '3.70',
        major: 'Biology',
        image: 'https://i.imgur.com/HQjT8sg.png'
      },
      {
        name: 'Noah',
        age: '21',
        address: 'Portland, ME',
        gpa: '3.78',
        major: 'Civil Engineering',
        image: 'https://i.imgur.com/Wf2lsEz.png'
      },
      {
        name: 'Sarah',
        age: '20',
        address: 'Beverly, MA',
        gpa: '4.00',
        major: 'Biology',
        image: 'https://i.imgur.com/pQyp1Of.png'
      },
      {
        name: 'Scott',
        age: '19',
        address: 'Philadelphia, PA',
        gpa: '3.40',
        major: 'Accounting',
        image: 'https://i.imgur.com/T59GiCG.png'
      },
      {
        name: 'Nadine',
        age: '19',
        address: 'Montreal, QC',
        gpa: '4.00',
        major: 'Biology',
        image: 'https://i.imgur.com/ThSNGms.png'
      },
      {
        name: 'Salim',
        age: '19',
        address: 'Boston, MA',
        gpa: '3.75',
        major: 'Physics',
        image: 'https://i.imgur.com/Pwc2Fzh.png'
      },
      {
        name: 'Caleb',
        age: '20',
        address: 'Anaheim, CA',
        gpa: '3.20',
        major: 'Accounting',
        image: 'https://i.imgur.com/3486LnK.png'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students')
  }
}

