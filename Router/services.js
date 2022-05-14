const User = require("../Models/user");
const Class = require("../Models/classes");

async function getUser(req, res) {
  User.findById(req.body._id, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.send(user.classes);
    }
  }).populate("classes");
}

async function logUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const userDB = await User.findOne({ email }).populate("classes");
    if (userDB === null) {
      res.send(false);
      return false;
    }
    if (userDB.password === password) {
      res.send(userDB);
      return false;
    }
    res.send(false);
  } catch (error) {
    console.log(error);
  }
}

async function queryUser(req, res) {
  try {
    await new User(req.body).save();
    res.send(true);
  } catch (error) {
    console.log(error);
  }
}

function serverStart(req, res) {
  res.send("Server escuchando en /");
}

async function getClasses(req, res) {
  const arrayClassesDB = await Class.find({});
  res.send(arrayClassesDB);
}

async function joinClass(req, res) {
  const userId = req.body.userLogged._id;
  const classes = [req.body.idClase];
  let flagReturn;

  await User.findById(userId).then((response) => {
    if (response.classes.includes(classes[0])) {
      flagReturn = false;
    } else {
      response.classes.forEach((element) => {
        classes.push(element.toString());
      });
      User.findOneAndUpdate({ userId }, { classes }).exec();
      flagReturn = true;
    }
  });

  res.send(flagReturn);
}

async function leaveClass(req, res) {
  const userId = req.body.userLogged._id;
  const idClase = req.body.idClase;
  let classes = [];
  let flagReturn;

  await User.findById(userId).then((response) => {
    if (response.classes.includes(idClase)) {
      flagReturn = true;
      response.classes.forEach((element) => {
        if (element.toString() !== idClase) {
          classes.push(element.toString());
        }
      });
      User.findOneAndUpdate({ userId }, { classes }).exec();
    } else {
      flagReturn = false;
    }
  });

  res.send(flagReturn);
}

module.exports = {
  getClasses: getClasses,
  logUser: logUser,
  queryUser: queryUser,
  serverStart: serverStart,
  joinClass: joinClass,
  leaveClass: leaveClass,
  getUser: getUser,
};
