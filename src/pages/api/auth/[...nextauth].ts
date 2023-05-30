import prisma from "@/utils/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!user) {
          return null;
        }
        const isPasswordValid = await compare(
          String(credentials?.password),
          user.password
        );
        if (!isPasswordValid) {
          return null;
        }
        return { email: user.email, id: String(user.id), name: user.name };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
