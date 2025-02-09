"use client";

import EliteForm from "@/components/Form/EliteForm";
import InputForm from "@/components/Form/InputForm";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/services/actions/registerUser";
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

export default function RegisterPage() {
  const handleSubmit = async (values: FieldValues) => {
    const registerData = {
      name: `${values.customer.firstName} ${values.customer.lastName}`,
      email: values.customer.email,
      password: values.password,
    };
    try {
      const response = await registerUser(registerData);
      console.log(response);
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
        <span>Register</span>
      </div>

      <div className="mx-auto max-w-[600px] space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create New Account
          </h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in instead!
            </Link>
          </p>
        </div>

        <EliteForm
          onSubmit={handleSubmit}
          defaultValues={{
            customer: {
              firstName: "",
              lastName: "",
              email: "",
            },
            password: "",
          }}
        >
          <InputForm
            type="text"
            name="customer.firstName"
            placeholder="First Name"
            required
          />
          <InputForm
            type="text"
            name="customer.lastName"
            placeholder="Last Name"
            required
          />
          <InputForm
            type="email"
            name="customer.email"
            placeholder="Email"
            required
          />
          <InputForm
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </EliteForm>
      </div>
    </div>
  );
}
