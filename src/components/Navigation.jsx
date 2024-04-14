import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <>
            <nav>
                 <div>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/membership'>Log In</NavLink>
                </div>
                <div>
                    <NavLink to='/membership'>Sign Up</NavLink>
                </div>
                <div>
                    <NavLink to='/gallery'>Gallery</NavLink>
                </div>
                <div>
                    <NavLink to='/membership'>Something Else?</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navigation
