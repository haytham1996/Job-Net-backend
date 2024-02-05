import User from "../models/User";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, birthDate } = req.body;

    if (!firstName || !lastName || !email || !password || !role || !birthDate)
      return res.status(400).send("All fields are required ");

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role,
      birthDate,
    });

    await newUser.save();
    return res.status(201).send({
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedUser) return res.status(404).send("User not found !");

    return res.status(200).send({
      status: "Success",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndRemove(id);

    if (!deletedUser) return res.status(404).send("User not found !");

    return res.status(200).send({
      status: "Success",
      data: deletedUser,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) return res.status(404).send("User not found !");

    return res.status(200).send({
      status: "Success",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).send({
      status: "Success",
      data: users,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
