import { Button } from "@/components/ui/button";
import { signOut } from "@/actions/auth.actions";

const UserPage: React.FC = () => {
  return (
    <div>
      <h1>Hello: !!</h1>
      <p>This is your user page</p>
      <form action={signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default UserPage;
