import { useRouter } from "next/router";
import { useState } from "react";
import jwt_decode from 'jwt-decode';

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      })
    })
    // console.log(response.data);
    const data = await response.json();
    const token = data.access;
    const decode_token = jwt_decode(token);
    const expTime = decode_token.exp;
    const user_id = decode_token.user_id;

    localStorage.setItem('token', token);
    localStorage.setItem('userId', user_id);
    localStorage.setItem('expTime', new Date(expTime*1000));
    console.log(jwt_decode(data.access));

  await router.push("/");
  };

  return (
    <section className="zoom-courses-area pd-top-135 pd-bottom-35 shadow">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-6">
            <div className="contact-inner ">
              <form
                className="contact-form"
                method="POST"
                onSubmit={handelSubmit}
              >
                <div className="single-input-wrap">
                  <label for="email">
                    Email<sup>*</sup>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="single-input-wrap">
                  <label for="password">
                    Password<sup>*</sup>
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div className="row justify-content-center">
                  <div className="col-3">
                    <button type="submit" className="btn-sm btn-base w-100">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
