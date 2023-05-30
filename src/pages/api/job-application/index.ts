import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/utils/prisma";
import { JobApplication } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (req.method === "POST") {
    try {
      const payload: JobApplication = req.body;
      await prisma.jobApplication.create({
        data: {
          jobVacancyId: payload.jobVacancyId,
          userId: payload.userId,
        },
      });
      return res.status(201).json({ message: "successful job application" });
    } catch (error) {
      return res.status(500).json({
        message: "something erros",
      });
    }
  }
  if (req.method === "GET") {
    try {
      const data = await prisma.jobApplication.findMany({
        where: {
          user: {
            email: String(session.user?.email),
          },
        },
      });
      return res.status(201).json({ data });
    } catch (error) {
      return res.status(500).json({
        message: "something erros",
      });
    }
  }

  return res.status(404).json({
    message: "no route match",
  });
}
