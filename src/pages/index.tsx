import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Guest from '@/components/Home/Guest'
import { useState } from 'react'
import AuthorizedUser from '@/components/Home/AuthorizedUser'
import { getSession, useSession, signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const { data: session } = useSession();

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			
			{ session ? <AuthorizedUser /> : <Guest /> }
		</>
	)
}

export async function getServerSideProps ({ req }: any) {
	const session = await getSession({ req })

	if(!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}

	return {
		props: { session }
	}
}
