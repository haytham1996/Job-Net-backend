import Application from "../models/Application";

export const createApplication = async (req, res) => {
  try {
    const { user, university, level } = req.body;

    if (!user || !university || !level)
      return res.status(400).send("All fields are required ");

    const newApplication = new Application({
      user,
      university,
      level,
    });

    await newApplication.save();
    return res.status(201).send({
      status: "Success",
      data: newApplication,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);

    if (!application) return res.status(404).send("Application not found !");

    return res.status(200).send({
      status: "Success",
      data: application,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find({});

    return res.status(200).send({
      status: "Success",
      data: applications,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const respondToApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;
    const application = await Application.findByIdAndUpdate(
      id,
      {
        $set: {
          status: response,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).send({
      status: "Success",
      data: application,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
