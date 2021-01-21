import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
    <div className = 'fixed-bottom'>
        <div className = 'd-flex justify-content-center m-3'>
            <a href= 'https://www.facebook.com/rhea.mallari' target = '_blank' className = "p-2">
                <img alt = 'My Facebook' src="../assets/footer/facebook-xxl2.png" width = '100' height = '100'/>
            </a>
            <a href = 'https://www.instagram.com/rheamallarii/' target = '_blank' className = "p-2">
                <img alt = 'My Instagram' src = '../assets/footer/facebook-xxl2.png' width = '100' height = '100'/>
            </a>
            <a href = 'https://www.youtube.com/channel/UCCFdBs1g_k7Q_-N8kTsJgOg' target = '_blank' className = "p-2">
                <img alt = 'My Channel' src = '../assets/footer/youtube1.png' width = '100' height = '100'/>
            </a>
        </div>
        <nav>
            <div className = 'bg-dark'>
                <div className = 'float-left mx-3'>
                    <div className = 'container'>
                        <div class="row mx-3">
                            <div class="col"><Link to='/about'>About</Link></div>
                            <div class="col"><Link to = '/contact'>TODO-FORM-Contact</Link></div>
                            <div class="w-100"></div>
                            <div class="col"><Link to = '/blog'>Blog</Link></div>
                            <div class="col"><Link to = '/privacy-policy'>TODO -Privacy Policy</Link></div>
                            <div class = 'w-100'></div>
                            <div class = 'col'><Link to = '/faq'>FAQ</Link></div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-m m-3 mx-5'>2020 Rhea Mallari</div>
                        </div>
                    </div>
                </div>
                <div className = 'float-right mx-5'>
                    <div className = 'container px-5'>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email">
                                </input>
                            </div>
                            <button type="submit" class="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Footer;