import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '', GITHUB_ID = '', GITHUB_SECRET = '' } = process.env;

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}),
		GithubProvider({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
			// https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
			// @ts-ignore
			scope: "read:user",
		}),
	]
})