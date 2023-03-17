import Layout from '../layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

    return (
        <Layout>
			<Head>
				<title>Login</title>
			</Head>
			<section className='w-3/4 mx-auto flex flex-col gap-10'>
				<div className="title">
					<h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
					<p className='w-3/4 mx-auto text-gray-400'>Log in to access your account and start exploring!</p>
				</div>

				{/* form */}
				<form className='flex flex-col gap-5'>
					<div className={styles.input_group}>
						<input
							className={styles.input_text}
							type='email'
							name='email'
							placeholder='Email'
						/>
						<span className='icon flex items-center px-4'>
							<HiAtSymbol size={25} />
						</span>
					</div>
					<div className={styles.input_group}>
						<input
							className={styles.input_text}
							type={`${showPassword ? 'text' : 'password'}`}
							name='password'
							placeholder='Password'
						/>
						<span className='icon flex items-center px-4' onClick={() => setShowPassword(!showPassword)}>
							<HiFingerPrint size={25} />
						</span>
					</div>

					{/* login buttons */}
					<div className="input-button">
						<button type='submit' className={styles.button}>
							Login
						</button>
					</div>
					<div className="input-button">
						<button type='button' className={styles.button_third_party}>
							Sign In with Google <Image src={'/assets/google.svg'} width={20} height="20" alt="google sign in"></Image>
						</button>
					</div>
					<div className="input-button">
						<button type='button' className={styles.button_third_party}>
							Sign In with GitHub <Image src={'/assets/github.svg'} width={20} height="20" alt="github sign in"></Image>
						</button>
					</div>
				</form>
				{/* bottom */}
				<p className="text-center text-gray-400">
					Don't have an account yet? <Link href={'/register'} className='text-blue-700'>Sign Up</Link>
				</p>
			</section>
		</Layout>
    )
}

export default Login