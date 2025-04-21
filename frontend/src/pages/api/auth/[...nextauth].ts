import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET) {
//   throw new Error('Missing Google OAuth credentials');
// }

// if (!process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || !process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET) {
//   throw new Error('Missing GitHub OAuth credentials');
// }

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/register",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: undefined,
  },
  callbacks: {
    async session({ session, token }) {
      // Add properties to session
      session.accessToken = token.accessToken;
      session.user.id = token.sub!;
      session.user.email = token.email!;
      session.user.name = token.name!;
      return session;
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return true;
      }
      return true; // For other providers, allow sign-in
    },
  },
  secret: process.env.NEXTAUTH_SECRET || process.env.SECRET_KEY,
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);
