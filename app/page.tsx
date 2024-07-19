import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import UserPage from "./(pages)/user/page";
import { SignInForm } from "@/components/SignInForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { user, session } = await validateRequest();

  /*   if (!user) {
    return redirect("/sign-in");
  } */

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mt-8">
        <h1 className="text-3xl">Deildin Season 4</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center p-24 gap-8">
        {user ? (
          <UserPage /> // Content for logged-in users
        ) : (
          <>
            <p>Please log in to access content.</p>
            <div className="flex gap-4">
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
