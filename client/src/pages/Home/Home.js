import './Home.scss'
export const Home = () => {
    const logOut = () =>{
        localStorage.removeItem("user");
        window.location.reload()
    }
    return (
        <div>
            <h1>Login Sucess</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}
