import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { register } from "@/api/Register";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return toast({
        title: "Validation Error",
        description: "All fields are required",
        variant: "destructive",
      });
    }

    if (password !== confirmPassword) {
      return toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
    }

    setIsSubmitting(true);

    const response = await register(formData);

    if (response?.success) {
      toast({
        title: "Registration Successful",
        description: response.message,
      });
    } else {
      toast({
        title: "Registration Failed",
        description: response?.message,
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h3 className="scroll-m-20 font-primary text-2xl font-medium tracking-tight text-center">
        Sign Up
      </h3>
      <p className="text-sm mt-2 text-muted-foreground text-center">
        Create your account today.
      </p>

      <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

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
          <Input
            name="confirmPassword"
            value={formData.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          {/* Already have an account?{" "}
          <Link to={"/auth"} className="hover:underline text-primary">
            Sign In here
          </Link> */}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
