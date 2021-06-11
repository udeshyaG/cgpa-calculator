const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');

router.get('/subjects', async (req, res) => {
  const dept = req.query.dept;
  const sem = req.query.sem;

  try {
    const data = await knex('DepartmentSubjects').select().where({
      dept_name: dept,
      sem: sem,
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

module.exports = router;
