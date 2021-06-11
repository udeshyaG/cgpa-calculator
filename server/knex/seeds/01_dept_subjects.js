exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DepartmentSubjects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('DepartmentSubjects').insert([
        {
          id: 1,
          dept_name: 'Computer Science',
          sem: 1,
          sub1: 'Computer Networks',
          sub2: 'Database Management',
          sub3: 'Automata Theory',
          sub4: 'Sofware Engineering',
          sub5: 'Operating System',
        },
        {
          id: 2,
          dept_name: 'Computer Science',
          sem: 2,
          sub1: 'Nice Sub',
          sub2: 'Nice Sub',
          sub3: 'Nice Sub',
          sub4: 'Nice Sub',
          sub5: 'Nice Sub',
        },
        {
          id: 3,
          dept_name: 'Computer Science',
          sem: 3,
          sub1: 'Nice Sub',
          sub2: 'Nice Sub',
          sub3: 'Nice Sub',
          sub4: 'Nice Sub',
          sub5: 'Nice Sub',
        },
        {
          id: 4,
          dept_name: 'Mechanical',
          sem: 1,
          sub1: 'Nice Sub',
          sub2: 'Nice Sub',
          sub3: 'Nice Sub',
          sub4: 'Nice Sub',
          sub5: 'Nice Sub',
        },
        {
          id: 5,
          dept_name: 'Mechanical',
          sem: 2,
          sub1: 'Nice Sub',
          sub2: 'Nice Sub',
          sub3: 'Nice Sub',
          sub4: 'Nice Sub',
          sub5: 'Nice Sub',
        },
        {
          id: 6,
          dept_name: 'Mechanical',
          sem: 3,
          sub1: 'Nice Sub',
          sub2: 'Nice Sub',
          sub3: 'Nice Sub',
          sub4: 'Nice Sub',
          sub5: 'Nice Sub',
        },
      ]);
    });
};
