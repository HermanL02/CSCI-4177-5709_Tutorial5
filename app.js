const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
  {
    email: 'abc@abc.ca',
    firstName: 'ABC',
    id: '5abf6783',
  },
  {
    email: 'xyz@xyz.ca',
    firstName: 'XYZ',
    id: '5abf674563',
  },
];

app.get('/users', (req, res) => {
  res.status(200).json({
    message: 'Users retrieved',
    success: true,
    users: users,
  });
});

app.get('/user/:id', (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    res.status(200).json({
      success: true,
      user: user,
    });
  } else {
    res.status(404).json({
      message: 'User not found',
      success: false,
    });
  }
});

app.post('/add', (req, res) => {
  if (!req.body.email || !req.body.firstName) {
    res.status(400).json({
      message: 'Invalid request, missing email or firstName',
      success: false,
    });
    return;
  }

  const newUser = {
    email: req.body.email,
    firstName: req.body.firstName,
    id: Date.now().toString(),
  };
  users.push(newUser);
  res.status(201).json({
    message: 'User added',
    success: true,
  });
});


app.put('/update/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex !== -1) {
    users[userIndex].email = req.body.email || users[userIndex].email;
    users[userIndex].firstName = req.body.firstName || users[userIndex].firstName;
    res.status(200).json({
      message: 'User updated',
      success: true,
    });
  } else {
    res.status(404).json({
      message: 'User not found',
      success: false,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint not found',
    success: false,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

