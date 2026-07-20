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
    let handleChange = (e:any) => {
        let {name, value} = e.target;
        setForm({...form, [name]:value})
    }
    let handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name</label>
                <input type="text" name="username" id="username"  onChange={handleChange}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} />
                <br />
                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />Male
                <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />Female
                <div>
                    <button>Submit</button>
                </div>
            </form>
            </div>
    )
}
export default Formy;