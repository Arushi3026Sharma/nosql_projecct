const {Router} = require('express');

const taskRouter = Router();

taskRouter.get('/getalltask');

taskRouter.post('/createtask');

taskRouter.put('/updatetask');

taskRouter.delete('/deletetask');

module.exports = taskRouter;