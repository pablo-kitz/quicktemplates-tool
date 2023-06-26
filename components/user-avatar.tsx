import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar"
import { UserCheckIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props} className="shadow-md">
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <UserCheckIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
