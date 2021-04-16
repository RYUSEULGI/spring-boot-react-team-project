import React from 'react';
import 'user/style/Signup.css';

const Signup = () => {
    const url = '#';
    return (
        <>
            <form action="/action_page.php">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this htmlForm to create an account.</p>
                    <hr />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                    />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />
                    <label htmlFor="psw-repeat">
                        <b>Repeat Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="psw-repeat"
                        required
                    />
                    <p>
                        By creating an account you agree to our{' '}
                        <a href={url}>Terms & Privacy</a>.
                    </p>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            Cancel
                        </button>
                        <button type="submit" className="signupbtn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Signup;
