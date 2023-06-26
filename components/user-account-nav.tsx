"use client"

import Link from "next/link"
import { User } from "next-auth"
import { signOut } from "next-auth/react"

import { UserSchema } from "@/lib/validations/user"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const parsedUser = UserSchema.parse(user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: parsedUser.name, image: parsedUser.image || null }}
          className="w-h-10 h-10"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {parsedUser.name && (
              <p className="font-medium">{parsedUser.name}</p>
            )}
            {parsedUser.email && (
              <p className="w-[200px] truncate text-xs text-muted-foreground">
                {parsedUser.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-destructive"
          //@ts-ignore
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            })
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
