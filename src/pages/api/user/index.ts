import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { User } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        email: String(session.user?.email),
      },
    });
    const { password, ...userWithoutPassword } = user as User;
    return res.status(200).json({ data: userWithoutPassword });
  }

  if (req.method === "PUT") {
    const payload = req.body;
    await prisma.user.update({
      where: {
        email: String(session.user?.email),
      },
      data: payload,
    });
    return res.status(200).json({ message: "success updated user" });
  }

  return res.status(404).json({
    message: "no route match",
  });
};

export default handler;
