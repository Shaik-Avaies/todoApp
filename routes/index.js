const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const taskController = require('../controllers/TaskController');


router.get('/',mainController.main);
router.post('/add-task',taskController.addTask);
router.get('/delete-task/',mainController.delete);

console.log("Router is running");


module.exports = router;