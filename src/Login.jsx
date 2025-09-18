import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [login, setlogin] = useState(false);
  return (
    <div>
      
        <div className={styles.con}>
          <div className={styles.container}>
            <div className={styles.btn}>
              {" "}
              <button
                className={login ? styles.active : styles.btnone}
                onClick={() => setlogin(true)}
              >
                login
              </button>
              <button
                className={!login ? styles.active : styles.btntwo}
                onClick={() => setlogin(false)}
              >
                signup
              </button>{" "}
            </div>
            {login ? (
              <>
                <h1 className={styles.log}>Login form </h1>
                <input
                  type="text"
                  className={styles.inputone}
                  placeholder="Email name"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className={styles.inputtwo}
                />{" "}
                <br />
                <a href="#" className={styles.anchor}>
                  forgot Password?
                </a>{" "}
                <br /> <br />
                <button className={styles.loginbtn}>Login</button>
                <div className={styles.ansign}>
                  Not a member?
                  <a href="#" className={styles.anchorsi}>
                    signup now
                  </a>
                </div>
              </>
            ) : (
              <>
                <h1 className="log">Signup Form </h1>
                <input
                  type="text"
                  className={styles.inputone}
                  placeholder="Email name"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className={styles.inputtwo}
                />{" "}
                <input
                  type="text"
                  placeholder="Confrim Password"
                  className={styles.inputtwo}
                />
                <br />
                <br /> <br />
                <button className={styles.loginbtn}>Sign up </button>
                <div className={styles.ansign}></div>
              </>
            )}
          </div>
        </div>
      
    </div>
  );
}

export default Login;
