import prisma from "../DB/db.config.js";

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  const postUser = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title: title,
      description: description,
    },
  });

  return res.json({ status: 200, data: postUser, msg: "Post is Created" });
};

//Update the Post

// export const updatePost = async (req, res) => {

//   const { user_id, title, description } = req.body;

//   await prisma.post.update({
//     where: {
//       id: Number(updatePost),
//     },
//     data: {
//         user_id: Number(PostId),
//        title:title,
//        description:description
//     },
//   });

//   return res.json({ status: 200, data: updatePost, msg: "Post is Updated" });
// };

//Get the Post

export const showPost = async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, data: post, msg: "Post is fetched" });
};

//Get the multiple post

export const fetchPosts = async (req, res) => {
  const posts = await prisma.post.findMany({});

  return res.json({ status: 200, data: posts, msg: "All users are fetched" });
};

// Delete the user

export const DeletePost = async (req, res) => {
  const postId = req.params.id;

  const DeletedPost = await prisma.user.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({
    status: 200,
    daat: DeletedPost,
    msg: "Post has been deleted",
  });
};
