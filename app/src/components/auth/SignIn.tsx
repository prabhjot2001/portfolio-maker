import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      return toast({
        title: "Validation Error",
        description: "Please fill in both email and password.",
        variant: "destructive",
      });
    }

    setIsSubmitting(true);

    try {
      const response = await handleLogin(formData);
      if (response?.success) {
        toast({
          title: "Login Successful",
          description: "Welcome back! Redirecting...",
        });
        // todo : redirect user when authenticated
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description:
            response?.message || "Invalid credentials, please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h3 className="scroll-m-20 font-primary text-2xl font-medium tracking-tight text-center">
        Sign In
      </h3>
      <p className="text-sm mt-2 text-muted-foreground text-center">
        Welcome back! Login to your account
      </p>

      <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          {/* Don&apos;t have an account yet?{" "}
          <Link to={"/auth"} className="hover:underline text-primary">
            Sign Up here
          </Link> */}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
