import { HugeiconsIcon } from '@hugeicons/react';
import { Menu02Icon, Search01Icon } from '@hugeicons/core-free-icons';
import './header.css'
// import Navbar from '../../Component/Customer/navbar';


export default function  Header({ontoggle}) {
    return (
        <>
            <div className="header-container">
            
                <button className="navbar-btn" onClick={ontoggle}>
                    <HugeiconsIcon
                                     icon={Menu02Icon}
                                     size={30}
                                     color="#000000"
                                     strokeWidth={2}
                                     />
                </button>

                {/* <input type="text" name="search" id="search-box" className='search-box' placeholder="Search here..."/> */}

                <h3 className='header-heading'>Orders</h3>               

            </div>
        </>
    )
}