import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, WrapText } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <>
      <MainNav>
        <div className="ml-auto">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "px-4")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>
      </MainNav>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <WrapText className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Use your credentials to login to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
