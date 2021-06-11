const express = require('express');
const router = express.Router();
const knex = require('../knex/knex');
const redisClient = require('../create-redis-client');

// Middleware for Cache
const checkCachedData = (req, res, next) => {
  redisClient.hgetall('studentCgpa', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result == null) {
        next();
      } else {
        res.send(result);
      }
    }
  });
};

router.get('/student-list', checkCachedData, async (req, res) => {
  try {
    const data = await knex('StudentCGPA')
      .select()
      .orderBy('id', 'desc')
      .limit(5);

    // store this in the cache
    const cacheObj = {};
    data.forEach((item) => {
      cacheObj[item.student_name] = item.cgpa;
    });

    redisClient.hmset('studentCgpa', cacheObj);

    res.send(cacheObj);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'something went wrong' });
  }
});

module.exports = router;
