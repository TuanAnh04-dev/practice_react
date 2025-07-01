import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { loginApi } from '../service/UserService';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        setIsLoading(true);
        const res = await loginApi(email, password);
        console.log('Res <<<<< ', res);
        if (res.token) {
            console.log('Login success');
            localStorage.setItem('token', res.token);

            toast.success('Login success');
        } else {

            toast.error(res.data.error);
        }
        setIsLoading(false);
    }
    return (
        <>
            <Container className='mt-5 border rounded p-3' style={{ width: '400px' }}>
                <form>
                    <h2 className='text-center mb-4'>Login</h2>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label pt-1" htmlFor="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label pt-1" htmlFor="form2Example2">Password</label>
                    </div>

                    <button
                        type="button"
                        className={email && password && isLoading == false ? "btn btn-primary btn-block mb-4" : "btn btn-primary btn-block mb-4 disabled"}
                        onClick={handleLogin}
                        style={{ width: '40%' }}
                    >
                        {isLoading == false ? "Sign in" : "..."}


                    </button>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </Container >

        </>
    )

}
export default Login;