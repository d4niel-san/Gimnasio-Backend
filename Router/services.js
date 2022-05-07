const User = require("../Models/user");
const Class = require("../Models/classes");

async function getUser(req, res) {
  try {
    const arrayUserDB = await User.find();
    console.log(arrayUserDB);
    res.json(arrayUserDB);
  } catch (error) {
    console.log(error);
  }
}

async function logUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const userDB = await User.findOne({ email });
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
  console.log(req.body);
  const userId = req.body.userLogged._id;
  const classId = req.body.idClase;

  const user = await User.findById(userId).exec(); //se busca en la BBDD el usuario

  if (!user.classes.includes(classId)) {
    //se revisa si esta o no la clase a la que se quiere unir
    user.classes.push(classId); // se agrega la clase al user
    User.deleteOne({ _id: userId }); // se elimina el registro de la BBDD
    await new User(user).save(); // se levanta el nuevo registro
  }
}

module.exports = {
  getClasses: getClasses,
  getUser: getUser,
  logUser: logUser,
  queryUser: queryUser,
  serverStart: serverStart,
  joinClass: joinClass,
};
