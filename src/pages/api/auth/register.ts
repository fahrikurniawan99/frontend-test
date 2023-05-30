import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

type Payload = {
  email: string;
  name: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const payload: Payload = req.body;
    try {
      const alreadyEmail = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });
      if (alreadyEmail) {
        return res.status(400).json({
          message: "Email sudah terdaftar",
        });
      }
      const passwordHash = await hash(payload.password, 12);
      payload.password = passwordHash;
      const user = await prisma.user.create({
        data: {
          email: payload.email,
          password: payload.password,
          name: payload.name,
        },
      });
      return res.status(201).json({
        message: "register success",
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "Maaf terjadi kesalahan",
      });
    }
  }
  return res.status(404).json({
    message: "no route match",
  });
}
