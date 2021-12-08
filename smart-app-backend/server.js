import express from 'express';
import bodyParser from 'body-parser';

/* 
--> response from the server
--> SignIn => POST request => respond success/fail
--> Register => POST request => success/fail => return user
--> Profile/:userId => GET user
--> Count => PUT(update) user's count number
*/

const app = express();

app.use(express.json());

const dummyData = {
  users: [
    {
      id: '1',
      name: 'Ion',
      email: 'ion@mail.com',
      password: 'pass',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '2',
      name: 'Ioana',
      email: 'ioana@mail.com',
      password: 'pass2',
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get('/', (req, res) => {
  res.send(dummyData.users);
});

app.post('/signin', (req, res) => {
  if (
    req.body.email === dummyData.users[0].email &&
    req.body.password === dummyData.users[0].password
  ) {
    res.status(200).json('succesfully loged in');
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  dummyData.users.push({
    id: '3',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.status(200).json(dummyData.users[dummyData.users.length - 1]);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
