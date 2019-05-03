const router = require('express').Router();

const Actions = require('./actions-model');

router.get('/', (req, res) => {
  Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error retrieving the actions' });
    });
});

router.post('/', (req, res) => {
    Dishes.add(req.body)
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error adding the dish' });
      });
  });

router.put('/:id', (req, res) => {
    Dishes.update(req.params.id, req.body)
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error updating the dish' });
      });
});

router.delete('/:id', (req, res) => {
    Dishes.remove(req.params.id)
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error deleting the dish' });
      });
});

module.exports = router;