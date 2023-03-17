import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Guest from '@/components/Home/Guest'
import { useState } from 'react'
import AuthorizedUser from '@/components/Home/AuthorizedUser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [session, setSession] = useState(false)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			
			{ session ? <AuthorizedUser /> : <Guest /> }
		</>
	)
}
