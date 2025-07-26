
// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon
// } from 'mdb-react-ui-kit';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState([]);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [passwordError, setPasswordError] = useState('');

//   const validate = () => {
//     const newErrors = [];

//     if (!name.trim()) newErrors.push('Name is required.');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) newErrors.push('Enter a valid email address.');
//     if (password.length < 6) newErrors.push('Password must be at least 6 characters.');
//     if (password.length >= 6 && confirmPassword !== password)
//       newErrors.push('Passwords do not match.');

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (validationErrors.length === 0) {
//       console.log('✅ Registration successful');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     setPasswordError(
//       value.length < 6 ? 'Password must be at least 6 characters.' : ''
//     );
//   };

//   return (
//     <MDBContainer fluid>
//       <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <form onSubmit={handleSubmit} noValidate  style={{ width: '100%' }}>
//                 <MDBInput
//                   wrapperClass='mb-4'
//                   label='Firstname Lastname'
//                   id='form1'
//                   type='text'
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <MDBInput
//                   wrapperClass='mb-4'
//                   label='Your Email'
//                   id='form2'
//                   type='email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <div className='mb-1 position-relative'>
//                   <MDBInput
//                     label='Password'
//                     id='form3'
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={handlePasswordChange}
//                     className='pr-5'
//                   />
//                   <span
//                     onClick={() => setShowPassword(!showPassword)}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       right: '16px',
//                       transform: 'translateY(-50%)',
//                       cursor: 'pointer',
//                       zIndex: 2,
//                       color: '#6c757d'
//                     }}
//                   >
//                     <MDBIcon fas icon={showPassword ? 'eye-slash' : 'eye'} />
//                   </span>
//                 </div>
//                 {passwordError && <div className="text-danger mb-3">• {passwordError}</div>}

//                 <div className='mb-4 position-relative'>
//                   <MDBInput
//                     label='Repeat your password'
//                     id='form4'
//                     type={showConfirm ? 'text' : 'password'}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     disabled={password.length < 6}
//                     className='pr-5'
//                   />
//                   <span
//                     onClick={() => setShowConfirm(!showConfirm)}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       right: '16px',
//                       transform: 'translateY(-50%)',
//                       cursor: 'pointer',
//                       zIndex: 2,
//                       color: '#6c757d'
//                     }}
//                   >
//                     <MDBIcon fas icon={showConfirm ? 'eye-slash' : 'eye'} />
//                   </span>
//                 </div>

//                 <MDBBtn className='mb-3' size='lg' type='submit'>Register</MDBBtn>

//                 {errors.length > 0 && (
//                   <div className="text-danger mt-2">
//                     <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//                       {errors.map((err, idx) => (
//                         <li key={idx}>• {err}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </form>
//             </MDBCol>

//             <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//               <MDBCardImage
//                 src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
//                 fluid
//               />
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState([]);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = [];

//     if (!name.trim()) newErrors.push('Name is required.');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) newErrors.push('Enter a valid email address.');
//     if (password.length < 6) newErrors.push('Password must be at least 6 characters.');
//     if (password.length >= 6 && confirmPassword !== password)
//       newErrors.push('Passwords do not match.');

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (validationErrors.length === 0) {
//       console.log('✅ Registration successful');
//       navigate('/');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     setPasswordError(value.length < 6 ? 'Password must be at least 6 characters.' : '');
//   };

//   return (
//     <MDBContainer fluid>
//       <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol
//               md='10'
//               lg='6'
//               className='order-2 order-lg-1 d-flex flex-column align-items-center'
//             >
//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
//                 <MDBInput
//                   wrapperClass='mb-4'
//                   label='Firstname Lastname'
//                   id='form1'
//                   type='text'
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <MDBInput
//                   wrapperClass='mb-4'
//                   label='Your Email'
//                   id='form2'
//                   type='email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 {/* Password field with eye icon */}
//                 <div className='mb-1 position-relative'>
//                   <MDBInput
//                     label='Password'
//                     id='form3'
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={handlePasswordChange}
//                     className='pr-5'
//                   />
//                   <span
//                     onClick={() => setShowPassword(!showPassword)}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       right: '16px',
//                       transform: 'translateY(-50%)',
//                       cursor: 'pointer',
//                       zIndex: 2,
//                       color: '#6c757d'
//                     }}
//                   >
//                     <MDBIcon fas icon={showPassword ? 'eye-slash' : 'eye'} />
//                   </span>
//                 </div>
//                 {passwordError && (
//                   <div className="text-danger mb-3">• {passwordError}</div>
//                 )}

//                 {/* Confirm password field with eye icon */}
//                 <div className='mb-4 position-relative'>
//                   <MDBInput
//                     label='Repeat your password'
//                     id='form4'
//                     type={showConfirm ? 'text' : 'password'}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     disabled={password.length < 6}
//                     className='pr-5'
//                   />
//                   <span
//                     onClick={() => setShowConfirm(!showConfirm)}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       right: '16px',
//                       transform: 'translateY(-50%)',
//                       cursor: 'pointer',
//                       zIndex: 2,
//                       color: '#6c757d'
//                     }}
//                   >
//                     <MDBIcon fas icon={showConfirm ? 'eye-slash' : 'eye'} />
//                   </span>
//                 </div>

//                 <MDBBtn className='mb-3' size='lg' type='submit'>
//                   Register
//                 </MDBBtn>

//                 {/* Error messages under the button */}
//                 {errors.length > 0 && (
//                   <div className="text-danger mt-2">
//                     <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//                       {errors.map((err, idx) => (
//                         <li key={idx}>• {err}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </form>
//             </MDBCol>

//             <MDBCol
//               md='10'
//               lg='6'
//               className='order-1 order-lg-2 d-flex align-items-center'
//             >
//               <MDBCardImage
//                 src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
//                 fluid
//               />
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = [];

    if (!name.trim()) newErrors.push('Name is required.');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.push('Enter a valid email address.');
    if (password.length < 6) newErrors.push('Password must be at least 6 characters.');
    if (password.length >= 6 && confirmPassword !== password)
      newErrors.push('Passwords do not match.');

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/weather/add', {
          name,
          emailid: email,
          password
        });

        console.log('✅ Registered:', response.data);
        alert('✅ Registration successful!');
        navigate('/');
      } catch (error) {
        if (error.response?.data?.error) {
          alert(`⚠️ Registration failed: ${error.response.data.error}`);
        } else {
          alert('❌ Something went wrong.');
        }
        console.error('Registration error:', error);
      }
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 6 ? 'Password must be at least 6 characters.' : '');
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Firstname Lastname'
                  id='form1'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Your Email'
                  id='form2'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className='mb-1 position-relative'>
                  <MDBInput
                    label='Password'
                    id='form3'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    className='pr-5'
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '16px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      zIndex: 2,
                      color: '#6c757d'
                    }}
                  >
                    <MDBIcon fas icon={showPassword ? 'eye-slash' : 'eye'} />
                  </span>
                </div>
                {passwordError && (
                  <div className="text-danger mb-3">• {passwordError}</div>
                )}

                <div className='mb-4 position-relative'>
                  <MDBInput
                    label='Repeat your password'
                    id='form4'
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={password.length < 6}
                    className='pr-5'
                  />
                  <span
                    onClick={() => setShowConfirm(!showConfirm)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '16px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      zIndex: 2,
                      color: '#6c757d'
                    }}
                  >
                    <MDBIcon fas icon={showConfirm ? 'eye-slash' : 'eye'} />
                  </span>
                </div>

                <MDBBtn className='mb-3' size='lg' type='submit'>
                  Register
                </MDBBtn>

                {errors.length > 0 && (
                  <div className="text-danger mt-2">
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      {errors.map((err, idx) => (
                        <li key={idx}>• {err}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </MDBCol>

            <MDBCol
              md='10'
              lg='6'
              className='order-1 order-lg-2 d-flex align-items-center'
            >
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;