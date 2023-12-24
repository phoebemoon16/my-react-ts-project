// 提供路由鉴权

import { react } from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuardRoute = ({component: Component, auth, ...rest}) => {
return (
    <Route {...auth render={(props) => (
        auth === true ? <Component {...props} /> ：<Redirect to="/" />
    )}></Route>
    )
}

export default GuardRoute;