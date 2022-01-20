const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');

const passportConfig = require('./passport');

const app = express();
passportConfig();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중!');
});
