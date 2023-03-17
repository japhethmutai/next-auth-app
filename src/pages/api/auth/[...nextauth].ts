import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	]
})