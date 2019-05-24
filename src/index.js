const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json()); // accept and convert json to object
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`\nServer is up on port: ${port}\n`);
});