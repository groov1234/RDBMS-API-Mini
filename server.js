const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db.js');

const server = express();

server.use(bodyParser.json());

// endpoints here
server.get('/', function(req, res) {
  res.status(200).json({ api: 'running....' });
});

server.get('/zoos', function(req, res) {
  knex('zoos')
    .then(function(zoos) {
      res.status(200).json(zoos);
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error retrieving zoos' });
    });
});

server.get('/zoos/:id', function(req, res) {
  const { id } = req.params;
  knex('zoos')
    .where('id', id)
    .then(function(zoos) {
      if (zoos.length > 0) {
        res.status(200).json(zoos);
      } else {
        res.status(404).json({ msg: `zoo with id ${id} does not exist` });
      }
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error retrieving zoos' });
    });
});

server.post('/zoos', function(req, res) {
  const zoo = req.body;
  knex
    .insert(zoo)
    .into('zoos')
    .then(function(ids) {
      res.status(201).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error inserting the zoo' });
    });
});

server.delete('/zoos/:id', function(req, res) {
  const { id } = req.params;
  knex('zoos')
    .where({ id })
    .then(function(zoo) {
      if (zoo.length) {
        knex('zoos')
          .where({ id })
          .del()
          .then(function(success) {
            res.status(200).json({ msg: `Zoo with id: ${id} deleted` });
          })
          .catch(function(fail) {
            res.status(500).json({ error: `Zoo with id: ${id} not deleted` });
          });
      } else {
        res.status(404).json({ msg: `Zoo with id: ${id} not found` });
      }
    });
});

server.get('/bears', function(req, res) {
  knex('bears')
    .then(function(bears) {
      res.status(200).json(bears);
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error retrieving zoos' });
    });
});

server.get('/bears/:id', function(req, res) {
  const { id } = req.params;
  knex('bears')
    .where('id', id)
    .then(function(bears) {
      if (bears.length > 0) {
        res.status(200).json(bears);
      } else {
        res.status(404).json({ msg: ` with id ${id} does not exist` });
      }
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error retrieving bears' });
    });
});

server.post('/bears', function(req, res) {
  const bear = ({ zooId, species, latinName } = req.body);
  knex
    .insert(bear)
    .into('bears')
    .then(function(ids) {
      res.status(201).json(ids);
    })
    .catch(function(err) {
      res.status(500).json({ msg: 'Error inserting the bear' });
    });
});

const port = 3000;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
