const messages = [
  {
    id: 0,
    message: "Welcome to the chat! Keep it clean!"
  }
];

let id = 1;

module.exports = {
  getAll: (req, res) => {
    res.status(200).send(messages);
  },
  addOne: (req, res) => {
    const { message } = req.body;

    const newMessage = {
      id,
      message
    };

    messages.push(newMessage);

    id++;

    res.sendStatus(200);
  }
};
