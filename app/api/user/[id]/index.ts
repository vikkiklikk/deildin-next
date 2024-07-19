import { NextApiRequest, NextApiResponse } from "next";
import { eq } from "drizzle-orm";
import db from "@/lib/database";
import { userTable } from "@/lib/database/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== "string") {
    res.status(400).send("Invalid user ID");
    return;
  }

  const result = await db.select().from(userTable).where(eq(userTable.id, id));

  const username = result.length > 0 ? result[0].username : "";

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(username);
}
