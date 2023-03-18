import { useState } from 'react'
import Layout from '@/layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface formValues {
	email: string;
	password: string;
}

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email required'),
		password: Yup.string().min(8, 'Password too short!').max(20, 'Password too long!').required('Password required')
	})

	const formik = useFormik<formValues>({
		initialValues: {
		  	email: '',
			password: ''
		},
		validationSchema: LoginSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	// Google handler function
	const handleGoogleSignIn = () => {
		signIn('google', { callbackUrl: "http://localhost:3000" })
	}

	// Github handler function
	const handleGithubSignIn = () => {
		signIn('github', { callbackUrl: "http://localhost:3000" })
	}

	console.log(formik.errors);

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
				<form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
					<div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
						<input
							className={styles.input_text}
							type='email'
							placeholder='Email'
							{...formik.getFieldProps('email')}
						/>
						<span className='icon flex items-center px-4'>
							<HiAtSymbol size={25} />
						</span>
					</div>
					{ formik.errors.email && formik.touched.email ? <span className='text-rose-500 text-xs text-left italic pl-4'>{formik.errors.email}</span> : <></> }
					<div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
						<input
							className={styles.input_text}
							type={`${showPassword ? 'text' : 'password'}`}
							placeholder='Password'
							{...formik.getFieldProps('password')}
						/>
						<span className='icon flex items-center px-4' onClick={() => setShowPassword(!showPassword)}>
							<HiFingerPrint size={25} />
						</span>
					</div>
					{ formik.errors.password && formik.touched.password ? <span className='text-rose-500 text-xs text-left italic pl-4'>{formik.errors.password}</span> : <></> }

					{/* login buttons */}
					<div className="input-button">
						<button type='submit' className={styles.button}>
							Login
						</button>
					</div>
					<div className="input-button">
						<button type='button' className={styles.button_third_party} onClick={handleGoogleSignIn}>
							Sign In with Google <Image src={'/assets/google.svg'} width={20} height="20" alt="google sign in"></Image>
						</button>
					</div>
					<div className="input-button">
						<button type='button' className={styles.button_third_party} onClick={handleGithubSignIn}>
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