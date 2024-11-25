import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthPage = () => {
  return (
    <div className="">
      <Tabs
        defaultValue="sign-in"
        className="max-w-sm flex flex-col items-center justify-center mx-auto mt-20"
      >
        <TabsList className="w-full">
          <TabsTrigger value="sign-in" className="w-full">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="sign-up" className="w-full">
            Sign Up
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sign-in" className="w-full">
          <SignIn />
        </TabsContent>
        <TabsContent value="sign-up" className="w-full">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
