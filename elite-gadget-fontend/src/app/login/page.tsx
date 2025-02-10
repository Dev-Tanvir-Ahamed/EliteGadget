"use client";
import EliteForm from "@/components/Form/EliteForm";
import InputForm from "@/components/Form/InputForm";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

// const formSchema = z
//   .object({
//     firstName: z.string().min(2, "First name must be at least 2 characters"),
//     lastName: z.string().min(2, "Last name must be at least 2 characters"),
//     email: z.string().email("Please enter a valid email address"),
//     username: z.string().min(3, "Username must be at least 3 characters"),
//     password: z.string().min(8, "Password must be at least 8 characters"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

// type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const handleSubmit = async (values: FieldValues) => {
    console.log(values);

    try {
      const response = await loginUser(values);
      console.log(response);
      storeUserInfo({ accessToken: response?.token });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Login</span>
      </div>

      <div className="mx-auto max-w-[600px] space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login to your account
          </h1>
        </div>

        <EliteForm
          onSubmit={handleSubmit}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <InputForm type="email" name="email" placeholder="Email" required />
          <InputForm
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {/* <div className="flex items-center">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="ml-2">
              Remember Me
            </label>
          </div> */}

          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-center">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Lost your password?
            </Link>
          </p>

          <p className="text-center">
            Don&apos;t have an account? <Link href="/register">Register</Link>
          </p>
        </EliteForm>
      </div>
    </div>
  );
}
