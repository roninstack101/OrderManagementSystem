import './navbar.css'
import { forwardRef } from 'react';
import { CircleUserRound } from 'lucide-react';
import { Warehouse } from 'lucide-react';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckListIcon, Scooter02Icon, DeliveryBox01Icon, LogoutSquare02Icon } from '@hugeicons/core-free-icons';


const Navbar = forwardRef(({isOpen}, ref) => {
    
    return (
        
        
            <div ref={ref} className={`navbar-container ${isOpen?"navbar-container-open":"navbar-container-close"}`}  >
            
             <header className='navbar-header'>
                <CircleUserRound  size={36} color='#ffffff' strokeWidth={2}/>
                <hr/>
                 <p className='profile-heading'>Profile</p>  
             </header>
            
            <div className="navbar-body">
                {/* <button className="inventory">
                    <HugeiconsIcon icon={CheckListIcon}
                                     size={28}
                                    color="#ffffff"
                                    strokeWidth={2} />

                    <p className='inventory-heading'>Inventory</p>
                </button> */}
                 <button className="product">
                    <HugeiconsIcon icon={DeliveryBox01Icon}
                                     size={26}
                                    color="#ffffff"
                                    strokeWidth={2} />

                    <p className='products-heading'>Products</p>
                </button>
                 <button className="orders">
                    <HugeiconsIcon icon={Scooter02Icon}
                                     size={28}
                                    color="#ffffff"
                                    strokeWidth={2} />

                    <p className='orders-heading'>Orders</p>
                </button>
            </div>

            <footer className='navbar-footer'></footer>
                 <button className="logout">
                    <HugeiconsIcon icon={LogoutSquare02Icon}
                                    size={30}
                                    color="#ffffff"
                                    strokeWidth={2}
                    />                
                    <p className='logout-heading'>Logout</p>
                </button>

            </div>
    );
    
});

export default Navbar;