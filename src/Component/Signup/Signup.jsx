import React, { Component } from 'react'
import './Signup.css'
import { AiFillFacebook, AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlineArrowRightCircle } from "react-icons/hi";
import Counter from '../../Counter';


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            mobile_email: '',
            fullname: '0',
            username: '0',
            password: '0',
            showsymbol: false,
        }
    }

    handleInput = (value, key) => {
        let check = false;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const symbolPattern = /^[a-zA-Z0-9]+$/;

        if (key === "email_mob") {
            check = !isNaN(value.charAt(0)) ? true : false;
            if (check) {
                value.length === 10 && !isNaN(value) ? this.setState({ showsymbol: false, mobile_email: value }) : this.setState({ showsymbol: true });
            }
            else {
                emailPattern.test(value) ? this.setState({ showsymbol: false, mobile_email: value }) : this.setState({ showsymbol: true });
            }
        }

        if (key === "fullname") {
            isNaN(value) ? this.setState({ fullname: value }) : this.setState({ fullname: '' });
        }

        if (key === "username") {
            symbolPattern.test(value) ? this.setState({ username: value }) : this.setState({ username: '' });
        }

        if (key === "password") {
            value.length === 8 ? this.setState({ password: value }) : this.setState({ password: '' });
        }
    }

    handleSignUp = () => {
        <Counter />
    }

    handleFacebookSignUp() {

    }

    render() {
        const { showsymbol, fullname, mobile_email, username, password } = this.state;
        return (
            <>
                <div className="signup-container flex">
                    <div className="insta-logo">
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png" alt="insta" />
                    </div>
                    <div className="signup-content">
                        <p>Sign up to see photos and videos from your friends.</p>
                    </div>
                    <div className="log-fb-btn flex mt-1" onClick={this.handleFacebookSignUp}>
                        <AiFillFacebook size={"20px"} />
                        <p>Log in with Facebook</p>
                    </div>
                    <div className="or mt-1">
                        <p className='hr-lines'>OR</p>
                    </div>
                    <div className="input-box flex mt-1">
                        <div className='flex'>
                            {showsymbol ?
                                <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
                                mobile_email.length != 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
                            }
                            <input
                                type="text"
                                name="mobile_email"
                                placeholder='Mobile Number or Email'
                                onChange={(data) => this.handleInput(data.target.value, "email_mob")} />
                        </div>
                        <div className="flex">
                            {fullname.length == 0 ? <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
                                fullname.length != 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
                            }
                            <input
                                type="text"
                                name="fullName"
                                placeholder='Full Name'
                                onChange={(data) => this.handleInput(data.target.value, "fullname")} />
                        </div>
                        <div className="flex">
                            {username.length == 0 ? <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
                                username.length != 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
                            }
                            <input
                                type="text"
                                name="username"
                                placeholder='Username'
                                onChange={(data) => this.handleInput(data.target.value, "username")} />
                        </div>
                        <div className="flex">
                            {password.length == 0 ? <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
                                password.length != 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
                            }
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={(data) => this.handleInput(data.target.value, "password")} />
                        </div>

                    </div>
                    <div className="learn-more mt-1">
                        <p>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a></p>
                    </div>
                    <div className="learn-more mt-1">
                        <p>By signing up, your agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.</p>
                    </div>
                    <div className="signup-btn log-fb-btn flex mt-1" onClick={this.handleSignUp}>
                        <p>Sign up</p>
                    </div>
                </div>
                <div className="account signup-container flex">
                    <p>Have an account ? <a href="#">Log in</a></p>
                </div>
            </>
        )
    }
}




// import React, { Component } from 'react';
// import './Signup.css';
// import { AiFillFacebook, AiOutlineCheckCircle } from "react-icons/ai";
// import { RxCrossCircled } from "react-icons/rx";
// import { HiOutlineArrowRightCircle } from "react-icons/hi";

// class Signup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       mobile_email: '',
//       fullname: '',
//       username: '',
//       password: '',
//       showsymbol: false,
//     };
//   }

//   handleInput = (value, key) => {
//     const { mobile_email } = this.state;
//     let showsymbol = false;

//     if (key === "email_mob") {
//       showsymbol = !isNaN(value.charAt(0)) ? false : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       this.setState({ showsymbol, mobile_email: showsymbol ? '' : value });
//     } else if (key === "fullname") {
//       this.setState({ fullname: isNaN(value) ? value : '' });
//     } else if (key === "username") {
//       this.setState({ username: /^[a-zA-Z0-9]+$/.test(value) ? value : '' });
//     } else if (key === "password") {
//       this.setState({ password: value.length === 8 ? value : '' });
//     }
//   }

//   handleSignUp = () => {
//     // Handle sign up logic
//   }

//   handleFacebookSignUp = () => {
//     // Handle Facebook sign up logic
//   }

//   render() {
//     const { showsymbol, fullname, mobile_email, username, password } = this.state;

//     return (
//       <>
//         <div className="signup-container flex">
//           <div className="insta-logo">
//             <img src="https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png" alt="insta" />
//           </div>
//           <div className="signup-content">
//             <p>Sign up to see photos and videos from your friends.</p>
//           </div>
//           <div className="log-fb-btn flex mt-1" onClick={this.handleFacebookSignUp}>
//             <AiFillFacebook size={"20px"} />
//             <p>Log in with Facebook</p>
//           </div>
//           <div className="or mt-1">
//             <p className='hr-lines'>OR</p>
//           </div>
//           <div className="input-box flex mt-1">
//             <div className='flex'>
//               {showsymbol ?
//                 <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
//                 mobile_email.length !== 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
//               }
//               <input
//                 type="text"
//                 name="mobile_email"
//                 placeholder='Mobile Number or Email'
//                 onChange={(event) => this.handleInput(event.target.value, "email_mob")}
//               />
//             </div>
//             <div className="flex">
//               {fullname.length === 0 ?
//                 <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
//                 fullname.length !== 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
//               }
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder='Full Name'
//                 onChange={(event) => this.handleInput(event.target.value, "fullname")}
//               />
//             </div>
//             <div className="flex">
//               {username.length === 0 ?
//                 <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
//                 username.length !== 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
//               }
//               <input
//                 type="text"
//                 name="username"
//                 placeholder='Username'
//                 onChange={(event) => this.handleInput(event.target.value, "username")}
//               />
//             </div>
//             <div className="flex">
//               {password.length === 0 ?
//                 <RxCrossCircled className='icons' size={"20px"} style={{ display: "block" }} /> :
//                 password.length !== 0 && <AiOutlineCheckCircle className='icons circle' size={"20px"} style={{ display: "block" }} />
//               }
//               <input
//                 type="password"
//                 name="password"
//                 placeholder='Password'
//                 onChange={(event) => this.handleInput(event.target.value, "password")}
//               />
//             </div>
//           </div>
//           <div className="learn-more mt-1">
//             <p>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a></p>
//           </div>
//           <div className="learn-more mt-1">
//             <p>By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.</p>
//           </div>
//           <div className="signup-btn log-fb-btn flex mt-1" onClick={this.handleSignUp}>
//             <p>Sign up</p>
//           </div>
//         </div>
//         <div className="account signup-container flex">
//           <p>Have an account? <a href="#">Log in</a></p>
//         </div>
//       </>
//     );
//   }
// }

// export default Signup;