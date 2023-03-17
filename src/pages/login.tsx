import Layout from '../layout/layout'
import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
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
					<div className="input-group">
						<input
							type='email'
							name='email'
							placeholder='Email'
						/>
					</div>
					<div className="input-group">
						<input
							type='password'
							name='password'
							placeholder='Password'
						/>
					</div>

					{/* login buttons */}
					<div className="input-button">
						<button type='submit'>
							Login
						</button>
					</div>
					<div className="input-button">
						<button type='submit'>
							Sign In with Google
						</button>
					</div>
					<div className="input-button">
						<button type='submit'>
							Sign In with GitHub
						</button>
					</div>
				</form>
				{/* bottom */}
				<p className="text-center text-gray-400">
					Don't have an account yet? <Link href={'/register'}>Sign Up</Link>
				</p>
			</section>
		</Layout>
    )
}

export default Login