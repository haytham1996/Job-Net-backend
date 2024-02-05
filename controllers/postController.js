import multer from "multer";
import Post from "../models/Post";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

export const uploadImage = upload.single("image");

export const createPost = async (req, res) => {
  try {
    const { user, description } = req.body;

    if (!user || !description)
      return res.status(400).send("All fields are required ");

    const newPost = new Post({
      user,
      description,
      image: req.file ? req.file.path : null,
    });

    await newPost.save();
    return res.status(201).send({
      status: "Success",
      data: newPost,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) return res.status(404).send("post not found !");

    return res.status(200).send({
      status: "Success",
      data: post,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ user: userId });

    return res.status(200).send({
      status: "Success",
      data: posts,
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
