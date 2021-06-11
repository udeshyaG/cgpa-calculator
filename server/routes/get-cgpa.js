const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');
const redisClient = require('../create-redis-client');

router.post('/get-cgpa', async (req, res) => {
  const { name, sub1, sub2, sub3, sub4, sub5 } = req.body;

  let cgpa =
    (parseFloat(sub1) +
      parseFloat(sub2) +
      parseFloat(sub3) +
      parseFloat(sub4) +
      parseFloat(sub5)) /
    50;
  cgpa = parseFloat(cgpa.toFixed(2));

  try {
    await knex('StudentCGPA').insert({
      student_name: name,
      cgpa: cgpa,
    });

    redisClient.hset('studentCgpa', name, cgpa);

    res.send({ name, cgpa });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'something went wrong' });
  }
});

module.exports = router;
