import { Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <h2>Welcome page</h2>
            <Route path='/welcome/new-user'>
                <h2>welcome, new user</h2>
            </Route>
        </section>
    )
}
export default Welcome