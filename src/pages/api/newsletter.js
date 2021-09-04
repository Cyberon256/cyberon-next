// /api/newsletter
import prisma from "../../helpers/prisma";

export default async function handler(req, res) {
  const {
    method,
    body: { email }, // query: { id, name }
  } = req;

  switch (method) {
    case "GET":
      try {
        const newsletters = await prisma.newsletter.findMany({
          select: {
            id: false,
            uuid: true,
            email: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        return res.status(200).json(newsletters);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "POST":
      try {
        const newsletter = await prisma.newsletter.create({
          data: { email },
          select: {
            id: false,
            uuid: true,
            email: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        return res.status(200).json(newsletter);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method "${method}" Not Allowed`);
  }
}
