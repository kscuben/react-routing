import {NavLink} from 'react-router-dom'
import classes from './MainHeader.module.css'
const MainHeader=()=>{
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;

/* note:
navlink is same as link but we are now using it to mark current active page
activeClassName is inbuilt prop we should not change it */