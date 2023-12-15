import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "Email Already Taken. Please another email used",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.json({ status: 200, data: newUser, msg: "User Created." });
};

//Update the user

export const updateUser = async (req, res) => {
  const userId = req.params.id;

  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.json({ status: 200, data: updateUser, msg: "User created" });
};

//Get the user

export const getUser = async (req, res) => {
  const userId = req.params.id;

  const FetchedUser = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: FetchedUser, msg: "User data fetched" });
};

//Get the multiple user

export const getManyUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      _count: {
        select: {
          Post: true,
          Comment: true,
        },
      },
    },
  });

  return res.json({ status: 200, data: users, msg: "All users are fetched" });
};

// Delete the user

export const DeleteUser = async (req, res) => {
  const userId = req.params.id;

  const DeletedUser = await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, msg: "User has been deleted" });
};
