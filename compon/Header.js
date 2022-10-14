import Link from 'next/link'
import style from "../styles/nav.module.css"
function Header(){
    return(
        <div>
        <header>
          <div className="flex justify-center bg-gray-200 pt-10 pb-4  gap-9 relative">
            <Link href="/">Home</Link>
            
            <Link href="/About" className="link">About</Link>
            <Link href="/Work" className="link">Work</Link>
            <Link href="/Blog" className="link">Blog</Link>

          </div>
        </header>
        </div>
    )
}
export default Header