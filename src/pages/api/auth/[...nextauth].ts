import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from "@/database/conn"
import Users from "@/model/Schema"
import { compare } from "bcryptjs"

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '', GITHUB_ID = '', GITHUB_SECRET = '', NEXTAUTH_SECRET = '' } = process.env;

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
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				connectMongo().catch(error => { error: "Connection failed..." })

				const {email, password} = credentials as {
					email: string,
					password: string,
				};

				// check user existence
				const result = await Users.findOne({ email: email })
				if(!result) {
					throw new Error("No user found with the email. Please register!")
				}

				// validate password
				const checkPassword = await compare(password, result.password);

				// Incorrect password
				if (!checkPassword || result.email !== email) {
					throw new Error("Username or password do not match")
				}

				return result;
			}
		})
	],
	secret: NEXTAUTH_SECRET
})