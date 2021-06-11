const express = require('express');
const app = express();
const knex = require('./knex/knex');
const cors = require('cors');

const getSubjects = require('./routes/get-subjects');
const getCgpa = require('./routes/get-cgpa');
const studentList = require('./routes/student-list');

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const data = await knex('DepartmentSubjects').select('dept_name', 'sem');

  res.send(data);
});

app.get('/departments', async (req, res) => {
  const data = await knex('DepartmentSubjects').select('dept_name').distinct();

  res.send(data);
});

// Get the subjects list for a particular branch and sem
app.use(getSubjects);

// Post the Subject Marks and get back cgpa
app.use(getCgpa);

// Get the list of students who recently calculated Cgpa (Caching logic is here)
app.use(studentList);

app.listen(5000, () => console.log('Listening to port 5000'));
