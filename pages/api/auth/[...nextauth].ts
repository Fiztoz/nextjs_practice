import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID,
            clientSecret: process.env.KEYCLOAK_SECRET,
            issuer: process.env.KEYCLOAK_ISSUER,
          }),
    ],
    secret: process.env.JWT_SECRET
});
