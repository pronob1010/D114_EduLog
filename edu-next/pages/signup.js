import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup() {
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const router = useRouter();

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //   sprateoprator
    setuserdata({ ...userdata, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (userdata.password1 == userdata.password2) {
      const response = await fetch("http://localhost:8000/api/auth/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userdata.email,
          username: userdata.username,
          firstname: userdata.firstname,
          lastname: userdata.lastname,
          password: userdata.password1,
        }),
      });

      await router.push('/login');
      // console.log(response);
      // const data = await response.json();
      // console.log(data);
    } else {
      alert("Password didn't matched!");
    }
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
                <div className="row">
                  <div className="col-6">
                    <div className="single-input-wrap">
                      <label for="firstname">
                        Firstname<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={userdata.firstname}
                        placeholder="First Name"
                        required
                        onChange={handelInput}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="single-input-wrap">
                      <label for="lastname">
                        Lastname<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={userdata.lastname}
                        placeholder="Last Name"
                        required
                        onChange={handelInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="single-input-wrap">
                  <label for="username">
                    Username<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={userdata.username}
                    placeholder="Username"
                    required
                    onChange={handelInput}
                  />
                </div>
                <div className="single-input-wrap">
                  <label for="email">
                    Email<sup>*</sup>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={userdata.email}
                    placeholder="Email"
                    required
                    onChange={handelInput}
                  />
                </div>
                <div className="single-input-wrap">
                  <label for="password1">
                    Password<sup>*</sup>
                  </label>

                  <input
                    type="password"
                    name="password1"
                    value={userdata.password1}
                    placeholder="Password"
                    required
                    onChange={handelInput}
                  />
                </div>
                <div className="single-input-wrap">
                  <label for="password2">
                    Confirm Password<sup>*</sup>
                  </label>

                  <input
                    type="password"
                    name="password2"
                    value={userdata.password2}
                    placeholder="Confirm Password"
                    required
                    onChange={handelInput}
                  />
                </div>
                <div className="row justify-content-center">
                  <div className="col-3">
                    <button type="submit" className="btn-sm btn-base w-100">
                      Submit
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
