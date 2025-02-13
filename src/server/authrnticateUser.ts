import jwt, { type JwtPayload } from "jsonwebtoken";
import { User } from "lucide-react";
import { getSession } from "next-auth/react";

const authenticateUser = async () => {
  const accessToken = (await getSession())?.accessToken ?? "";
  //    TODO: Omkar, please implement this function, we checking role of user in server/uploadthing
  //   return User;
  return { name: "user", role: "ORGANIZER" };
};

export { authenticateUser };
