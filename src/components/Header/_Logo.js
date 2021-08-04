import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./_Logo.scss"
import { Link } from "gatsby"

const Logo = () => {
    return (
        <div className="logo_wrapper">
            <Link to="/">
                <StaticImage
                    src="../../images/logo.png"
                    alt="D.A.P_Logo"
                    layout="fullWidth"
                />
            </Link>
        </div>    
    )  
}

export default Logo