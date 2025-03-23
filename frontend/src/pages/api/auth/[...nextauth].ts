import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: credentials.username,
                password: credentials.password,
              }),
            }
          );

          // Debug: Log the status and raw response text
          const responseText = await response.text();
          console.log("Response status:", response.status);
          console.log("Raw response:", responseText);
          
          // Only try parsing if we have content
          let data;
          if (responseText) {
            try {
              data = JSON.parse(responseText);
            } catch (parseError) {
              console.error("JSON parse error:", parseError);
              return null;
            }
          } else {
            return null;
          }
          
          if (!response.ok) {
            return null;
          }
          
          // Return user data and token to store in session
          return {
            id: data.user.id.toString(),
            name: data.user.username,
            email: data.user.email,
            accessToken: data.access_token
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (session.user) {
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // Custom login page
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

const handler = NextAuth(authOptions);
export default handler;
export { handler as GET, handler as POST };
// This file handles authentication using NextAuth.js with a custom credentials provider.
// It defines the authentication options, including the login endpoint, JWT handling, and session management.
// The `authorize` function sends a POST request to the backend with the user's credentials.
// If successful, it returns the user data and access token.
// The `jwt` and `session` callbacks manage the JWT token and session data.
// The `signIn` page is set to a custom login page.
// The handler is exported for use in API routes, allowing NextAuth.js to handle authentication requests.
// The `GET` and `POST` exports allow the handler to respond to both GET and POST requests.