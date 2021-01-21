import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
    <div className = 'bottom'>
        <div className = 'd-flex justify-content-center m-3'>
            <a href= 'https://www.facebook.com/rhea.mallari' rel= 'noreferrer' target = '_blank' className = "p-2">
                <img alt = 'My Facebook' src="../assets/footer/facebook-xxl2.png" width = '100' height = '100'/>
            </a>
            <a href = 'https://www.instagram.com/rheamallarii/'  rel='noreferrer' target = '_blank' className = "p-2">
                <img alt = 'My Instagram' src = '../assets/footer/facebook-xxl2.png' width = '100' height = '100'/>
            </a>
            <a href = 'https://www.youtube.com/channel/UCCFdBs1g_k7Q_-N8kTsJgOg'  rel='noreferrer' target = '_blank' className = "p-2">
                <img alt = 'My Channel' src = '../assets/footer/youtube1.png' width = '100' height = '100'/>
            </a>
        </div>
        <nav>
            <div className = 'bg-dark'>
                <div className = 'float-left mx-3'>
                    <div className = 'container'>
                        <div className ="row mx-3">
                            <div className ="col"><Link to='/about'>About</Link></div>
                            <div className ="col"><Link to = '/contact'>TODO-FORM-Contact</Link></div>
                            <div className ="w-100"></div>
                            <div className ="col"><Link to = '/blog'>Blog</Link></div>
                            <div className ="col"><Link to = '/privacy-policy'>TODO -Privacy Policy</Link></div>
                            <div className = 'w-100'></div>
                            <div className = 'col'><Link to = '/faq'>FAQ</Link></div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-m m-3 mx-5'>2020 Rhea Mallari</div>
                        </div>
                    </div>
                </div>
                <div className = 'float-right mx-5'>
                    <div className = 'container px-5'>
                        <form>
                            <div className ="form-group">
                                <label hmtlfor="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    className ="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email">
                                </input>
                            </div>
                            <button type="submit" className ="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Footer;