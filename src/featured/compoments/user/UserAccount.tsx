import { useState, useEffect } from "react";
import { supabase } from "../../../shared/lib/supabase";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "#components/ui/card";
import { useAuth } from "#hooks/useAuth";



export default function UserAccount() {
  const { user, loading: authLoading } = useAuth();
const [profileLoading, setProfileLoading] = useState(false);
  const [fullName, setFullName] = useState<string | null>(null);





 useEffect(() => {
  if (!user) return;

  const userId = user.id;

  let ignore = false;

  async function getProfile() {
    setProfileLoading(true);

    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", userId)
      .single();

    if (!ignore) {
      if (error) {
        console.warn(error);
      } else if (data) {
        setFullName(data.full_name);
      }
    }

    setProfileLoading(false);
  }

  getProfile();

  return () => {
    ignore = true;
  };
}, [user]);

   if (authLoading) {
  return <div>Loading...</div>;
}

  if (!user) {
    return <div>Please log in.</div>;
  }

  async function updateProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) return;
    setProfileLoading(true);

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: fullName,
    });

    if (error) {
      alert(error.message);
    }
    setProfileLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Your Account</CardTitle>
      </CardHeader>

      <form onSubmit={updateProfile}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-muted-foreground">
              Email
            </label>
            <Input id="email" type="text" value={user.email ?? ""} disabled />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="full_name" className="text-sm">
              Full name
            </label>
            <Input
              id="full_name"
              type="text"
              required
              value={fullName ?? ""}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" disabled={profileLoading} className="w-full">
            {profileLoading ? "Saving..." : "Update Profile"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
