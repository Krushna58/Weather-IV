
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

import '../Style/LoginPage.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { UserContext } from '../ContextApi/UserContext';


function Login({ setIsLoggedIn }) {
    const [emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    // const { setEmail } = useContext(UserContext);

    // localStorage.setItem("userEmail" , emailid);              // to handle reloads


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/weather/api/user', {
                emailid,
                password
            });

            
            // setEmail(emailid);              // pass the email to usercontext hook
            localStorage.setItem("userEmail" , response.data.emailid);
            localStorage.setItem('sessionActive', 'true');
             navigate("/home" ,  { state: { emailid } })     // ✅ Redirect after login
              console.log("session active true");
           
            alert(`✅ Welcome, ${response.data.name}`);
            setIsLoggedIn(true);                // 🔓 Toggle login state
           
              
               
                
                //  navigate("/home") 
           
            console.log('sessioon activated');
            console.log(localStorage);

            setErrorMsg('');
            alert("ok")


        } catch (error) {
            setErrorMsg('Invalid email or password.');
        }
    };

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
            <MDBRow>
                <MDBCol col='10' md='6'>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Login Illustration"
                    />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: 'blue' }}>
                            Sign in
                        </p>
                    </div>

                    <MDBInput
                        wrapperClass='mb-4'
                        label='Email address'
                        id='formEmail'
                        type='email'
                        size="lg"
                        value={emailid}
                        onChange={(e) => setEmailid(e.target.value)}
                    />
                    <MDBInput
                        wrapperClass='mb-4'
                        label='Password'
                        id='formPassword'
                        type='password'
                        size="lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="d-flex justify-content-between mb-4">
                        <Link to="/resetpassword" className="text-decoration-none">
                            Forgot password?
                        </Link>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLogin}>
                            Login
                        </MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">
                            Don't have an account?{' '}
                            <Link to="/register" className="link-danger">
                                Register
                            </Link>
                        </p>

                        {errorMsg && (
                            <div className="text-danger mt-2">
                                • {errorMsg}
                            </div>
                        )}
                    </div>
                </MDBCol>
            </MDBRow>

            <div className="d-flex flex-column flex-md-row justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2025. All rights reserved.
                </div>

                <div>
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="md" />
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='twitter' size="md" />
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='google' size="md" />
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='linkedin-in' size="md" />
                    </MDBBtn>
                </div>
            </div>
        </MDBContainer>
    );
}

export default Login;
