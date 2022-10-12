import Nav from "../compon/Header"
import Foot from "../compon/Footer"
function Layout({ children }) {
    return (
        <>
           <Nav/>
            <div>
              {children}
            </div>
            <Foot/>
        </>
    )
}
export default Layout;