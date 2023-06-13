const {Router} = require("express");
const {UserModel} = require("../Models/User.model");
const UserRouter = Router();

UserRouter.post("/", async (req, res) => {
  const {username, email} = req.body;
  try {
    const Adduser = new UserModel({
      username,
      email,
      mobnumber,
      address,
    });
    await Adduser;
    res.status(201).send({msg: "User Created"});
  } catch (err) {
    res.status(200).send({msg: "User Not Created"});
  }
});

UserRouter.get("/", async (req, res) => {
  try {
    const AllUsers = await UserModel.find();
    res.status(201).send({msg: "User Data", AllUsers: AllUsers});
  } catch (err) {
    res.status(200).send({msg: "Data Not Found", err: err});
  }
});

UserRouter.patch("/:id", (req, res) => {});

UserRouter.delete('/:id', async (req, res) => {
    try {
      const User = await UserModel(req.params.id);
      if (!User) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.send({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting User' });
    }
  });
module.exports = {UserRouter};
