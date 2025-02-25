import { Metadata } from "next";
import Login from "@/components/Landing/Login";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - GMC Point",
  description: "Sign in to your GMC Point account to access your dashboard and manage your Google Merchant Center services.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />      
      </div>
      <Login />
    </main>
  );
} 