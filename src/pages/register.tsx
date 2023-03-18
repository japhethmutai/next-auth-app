import { useState } from "react"
import Layout from "@/layout/layout"
import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/Form.module.css'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi"
import Link from "next/link"
import { useFormik } from 'formik';

interface formValues {
	username: string;
	email: string;
	password: string;
	cpassword: string;
}

const Register = () => {
	const [showPassword, setShowPassword] = useState({ password: false, cpassword: false })

	const formik = useFormik<formValues>({
		initialValues: {
		  	username: '',
			email: '',
			password: '',
			cpassword: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Layout>
			<Head>
				<title>Register</title>
			</Head>
			
			<section className='w-3/4 mx-auto flex flex-col gap-10'>
				<div className="title">
					<h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
					<p className='w-3/4 mx-auto text-gray-400'>Sign up now to start enjoying our services!</p>
				</div>

				{/* form */}
				<form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
					<div className={styles.input_group}>
						<input
							className={styles.input_text}
							type='text'
							placeholder='Username'
							{...formik.getFieldProps('username')}
						/>
						<span className='icon flex items-center px-4'>
							<HiOutlineUser size={25} />
						</span>
					</div>
					<div className={styles.input_group}>
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
					<div className={styles.input_group}>
						<input
							className={styles.input_text}
							type={`${showPassword.password ? 'text' : 'password'}`}
							placeholder='Password'
							{...formik.getFieldProps('password')}
						/>
						<span className='icon flex items-center px-4' onClick={() => setShowPassword({ ...showPassword, password: !showPassword.password })}>
							<HiFingerPrint size={25} />
						</span>
					</div>
					<div className={styles.input_group}>
						<input
							className={styles.input_text}
							type={`${showPassword.cpassword ? 'text' : 'password'}`}
							placeholder='Confirm Password'
							{...formik.getFieldProps('cpassword')}
						/>
						<span className='icon flex items-center px-4' onClick={() => setShowPassword({ ...showPassword, cpassword: !showPassword.cpassword })}>
							<HiFingerPrint size={25} />
						</span>
					</div>

					{/* login buttons */}
					<div className="input-button">
						<button type='submit' className={styles.button}>
							Sign Up
						</button>
					</div>
				</form>
				{/* bottom */}
				<p className="text-center text-gray-400">
					Have an account? <Link href={'/login'} className='text-blue-700'>Sign In</Link>
				</p>
			</section>
		</Layout>
	)
}

export default Register