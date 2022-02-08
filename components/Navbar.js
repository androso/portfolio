import { StyledNavbar } from "../styles";
import Link from "next/link";

export default function () {

    return (
        <StyledNavbar>
            <div className="navigation-container">  
                <Link href="/#Home">
                    <a className="navigation-links">Home</a>    
                </Link>
                <Link href="/#About">
                    <a className="navigation-links" >About</a>
                </Link>
                <Link href="/Blog">
                    <a className="navigation-links" >Blog</a>
                </Link>
                <Link href="//replit.com/site/pricing">
                    <a className="navigation-links">Projects</a>
                </Link>
                <Link href="/#Contact">
                    <a className="navigation-links">Contact</a>
                </Link>
            </div>
        </StyledNavbar>
    )
}