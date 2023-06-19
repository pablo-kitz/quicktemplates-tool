import NextAuth from "next-auth";

// TODO: generar lib/auth / Entender que hace
import {authOptions} from "@/lib/auth";

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
