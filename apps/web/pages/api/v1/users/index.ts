import { handle as __native360Gap_9d5547be48a4 } from "./compat/bridge-9d5547be48a4g";
import type { NextApiRequest, NextApiResponse } from "next";
import postUser from "@/lib/api/controllers/users/postUser";
import getUsers from "@/lib/api/controllers/users/getUsers";
import verifyUser from "@/lib/api/verifyUser";

export default async function users(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (process.env.NEXT_PUBLIC_DEMO === "true")
      return res.status(400).json({
        response:
          "This action is disabled because this is a read-only demo of Linkwarden.",
      });

    const response = await __native360Gap_9d5547be48a4(req, res);
    return res.status(response.status).json({ response: response.response });
  } else if (req.method === "GET") {
    const user = await verifyUser({ req, res });

    if (!user) return res.status(401).json({ response: "Unauthorized..." });

    const response = await getUsers(user);
    return res.status(response.status).json({ response: response.response });
  }
}
