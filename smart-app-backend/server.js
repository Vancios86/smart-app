import express from 'express';
import bodyParser from 'body-parser';
// import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';

/* 
--> response from the server
--> SignIn => POST request => respond success/fail
--> Register => POST request => success/fail => return user
--> Profile/:userId => GET user
--> Count => PUT(update) user's count number
*/

const app = express();

app.use(bodyParser.json());
app.use(cors());

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
  login: [
    {
      id: '1',
      has: '',
      email: 'ion@mail.com',
    },
  ],
};

// bcrypt.hash("bacon", null, null, function(err, hash) {
//   // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//   // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//   // res = false
// });

app.get('/', (req, res) => {
  res.send(dummyData.users);
});

app.post('/signin', (req, res) => {
  if (
    req.body.email === dummyData.users[0].email &&
    req.body.password === dummyData.users[0].password
  ) {
    res.status(200).json(dummyData.users[0]);
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

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  dummyData.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.status(200).json(user);
    }
  });
  if (!found) {
    res.status(404).json('user does not exists');
  }
});

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  dummyData.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.status(200).json(user.entries);
    }
  });
  if (!found) {
    res.status(404).json('user does not exists');
  }
});

app.listen(3001, () => {
  console.log('listening on 3001');
});
