import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

//MENU
const Navbarr = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (   
        <div className="navbar-dark bg-dark">
            <div className="container">     
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                <Link href="/">
                    <NavbarBrand  className="mr-auto">Simple Portafolio</NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="navbar-nav ml-auto">
                        <Link href="/blog">
                            <NavLink>Blog</NavLink>
                        </Link>
                        <Link href="/github">
                        <NavItem>
                            <NavLink >GitHub</NavLink>
                        </NavItem>
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>   
            </div>    
        </div>   
    );
}
// const Navbar = () => (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//             <Link  href="/">
//                 <a className="navbar-brand">Simple Portafolio</a>
//             </Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" 
//             data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
//             aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link href="/blog">
//                             <a className="nav-link">Blog</a>
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link  href="/github">
//                             <a className="nav-link">Github</a>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// )


export default Navbarr;