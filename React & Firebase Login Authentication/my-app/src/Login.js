import React from 'react'

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (

        <section className="">

            <div className="login-wrap">

                <div className="login-html">

                    <label>UserName</label>

                    <input className="form-control "
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>

                    <label>Password</label>
                    <input className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin} className="btn btn-primary">Sign in</button>
                                <p>
                                    Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} curser={{ PointerEvent }} style={{ color: "white" }}>Sign up</span>
                                </p>
                            </>
                            ) : (

                            <>
                                <button onClick={handleSignup} className="btn btn-primary"> Sign Up </button>

                                <p>Have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)} curser={{ PointerEvent }} style={{ color: "white" }}> Sign in </span>
                                </p>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login




