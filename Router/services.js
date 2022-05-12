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
  //console.log(req.body);
  const userId = req.body.userLogged._id;
  const classId = req.body.idClase;
  /*
  //Esto Funciona
  const user = await User.findById(userId); //se busca en la BBDD el usuario

  if (!user.classes.includes(classId)) {
    //se revisa si esta o no la clase a la que se quiere unir
    user.classes.push(classId); // se agrega la clase al user
    User.deleteOne({ _id: userId }); // se elimina el registro de la BBDD
    await new User(user).save(); // se levanta el nuevo registro
  }
*/

  //Esto no funciona
  await User.findById(userId).then((response) => {
    if (!response.classes.includes(classId)) {
      console.log("Entre 1: La clase no esta en el array, hay que agregarla");

      if (!response.classes) {
        console.log(
          "Entre 2: no tiene clases previamente cargadas, array vacio"
        );

        const classes = [classId];
        User.findOneAndUpdate({ userId }, { classes }).then((element) =>
          console.log(element.classes)
        );
      } else {
        console.log(
          "Entre 3: tiene clases previamente cargadas, hay que pushear la clase en el array"
        );

        const classes = [classId];
        response.classes.forEach((element) => {
          classes.push(element.toString());
        });

        console.log(classes);
        User.findOneAndUpdate({ userId }, { classes }).then((element) =>
          console.log(element.classes)
        );
      }
    } else {
      console.log("Entre 4: La clase ya esta agregada, nada que hacer");
    }
  });
}

module.exports = {
  getClasses: getClasses,
  getUser: getUser,
  logUser: logUser,
  queryUser: queryUser,
  serverStart: serverStart,
  joinClass: joinClass,
};

/*const newClasses = [...response.classes, classId]; no funciona porque es ObjectID  "new ObjectId("6273ddf2b691cd62bef411a3")"
  y el toString del spread me agrega todos los objetos en un solo registro
  [
    '6273ddf2b691cd62bef411a3,6273de9db691cd62bef411a4',
    '627d1291fc29c327a99c40ba'
  ]
*/
