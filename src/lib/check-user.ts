import { clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) return null;

    const loggedInUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (loggedInUser) {
      return loggedInUser;
    } else {
      const name = `${user.firstName} ${user.lastName}`;

      const client = await clerkClient();

      const username = `${name.split(" ").join("-")}${user.id.slice(-4)}`;

      client.users.updateUser(user.id, {
        username,
      });

      await prisma.user.create({
        data: {
          clerkUserId: user.id,
          username,
          email: user.id,
          name,
          imageUrl: user.imageUrl,
        },
      });
    }
  } catch (error) {
    console.log("error while checking user", error);
  }
};
