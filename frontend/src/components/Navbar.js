import React from 'react'
import PropTypes from 'prop-types'
import { Link,useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import {FiShoppingCart} from 'react-icons/fi';
import { useContext } from 'react';
export default function Navbar(props) {
    const { state, dispatch } = useContext(userContext);
    console.log(dispatch)
    let navigate =useNavigate();
    const handleCart =() => {
        navigate('/checkout');
    }
    const RenderMenu=()=>{
        if(state){
            return(
                <>
                <nav class="navbar navbar-expand-lg py-3 bg-dark fixed-top">
                        <div class="container">
                        <a class="navbar-brand text-light" >Grocery Mapper</a>
                            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=" text-light" style={{color:"red"}}>↓↓↓</span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <form className="d-flex">
                        <button  onClick={handleCart} className="btn btn-outline text-light">
                            <strong>Checkout</strong>&nbsp;
                            <FiShoppingCart size={20}/>&nbsp;{props.data.count}
                        </button>
                    </form>
                            <li className="nav-item"><Link className="nav-link text-light" to="/profile" >Profile</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/logout" >Logout</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
                </>
            )
        }
        else{
            return(
                <>
               
                <nav class="navbar navbar-expand-lg py-3 bg-dark fixed-top">
                <div class="container">
                    <li class="navbar-brand text-light" >Grocery Mapper</li>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=" text-light" style={{color:"red"}}>↓↓↓</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link text-light" to="/signup"> SignUp </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/login" > Login</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
                </>
            )
        }
    }

    return (
        <>
        
                        <RenderMenu />
                    
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
