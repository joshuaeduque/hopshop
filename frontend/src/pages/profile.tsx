import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Header, Navigation, Footer } from "@/components/layout";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <Navigation />
      <main className="min-h-screen p-4">
        <h1 className="text-4xl font-bold">Profile</h1>
        {session ? (
          <div className="mt-4">
            <p>Welcome, {session.user?.name}!</p>
            <p>Email: {session.user?.email}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </main>
      <Footer />
    </>
  );
}

// Server-side protection for the page
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login?callbackUrl=/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
};