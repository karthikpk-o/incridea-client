import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { MeDocument } from "~/generated/generated";
import { client } from "~/lib/apollo";

const authenticateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession()
  if (!session) return null;

  const { data, loading } = await client.query({
    query: MeDocument
  })

  if (loading) return null;

  if (data.me.__typename === "Error")
    return null;

  return data.me.data
};

export { authenticateUser };
