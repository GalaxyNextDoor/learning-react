const Formy = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
            </form>
            </div>
    )
}
export default Formy;