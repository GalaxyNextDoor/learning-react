import { useState } from "react";

const Formy = () => {
    let [form, setForm] = useState([
        {
            username:"",
            email:"",
            password:"",
            gender:""
        }
    ])
    return (
        <div>
            <form action="">
                <label htmlFor="username">Name</label>
                <input type="text" name="username" id="username" />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" id="male" value="male" />Male
                <input type="radio" name="gender" id="female" value="female" />Female
            </form>
            </div>
    )
}
export default Formy;