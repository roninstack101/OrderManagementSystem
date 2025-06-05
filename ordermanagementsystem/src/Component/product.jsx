import axios from 'axios';
import './product.css';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Products() {


    const [product, setProduct] = useState([])

    useEffect(() => {
       axios.get('https://mammoth-arriving-heartily.ngrok-free.app/products',{headers:{
                    "ngrok-skip-browser-warning": "69420",
                    "Content-type":"application/json"
        }})
        .then((response) => { 
            setProduct(response.data);
            console.log(response.data);

        })
        .catch((Error) => {

            alert(Error); 
    })
     
    }, [])
    
    // if (product[0].quantity <= 0) {
    //     document.getElementById("avail").innerHTML = "<div className='available'></div>";
    // }
    // else document.getElementById("avail").innerHTML = "<div className='not-available'></div>";
    return (
        <>
            <div className="main-product-container">
                    <div className="header">
                        <h2 className='name'> </h2>
                    </div>
                    <div className="footer">
                        <div className="price"></div>
                        <div className={`availability ${product[0]?.quantity<1?"not-available":"available"}`} id='avail'></div>
                    </div>
            </div>
        </>
    )
    
}