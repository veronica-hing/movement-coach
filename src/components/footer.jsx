import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <nav color = 'dark' dark >
            <div className = 'fixed-bottom'>
                <div className = 'float-left mx-5'>
                    <div className = 'container'>
                        <div className = 'row'>
                            <div className = 'col-m mx-5'>Left link A</div>
                            <div className = 'col-m mx-5'>Right link D</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-m mx-5'>Left link B</div>
                            <div className = 'col-m mx-5'>Left link E</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-m mx-5'>Left link C</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-m m-3 mx-5'>2020 Rhea Mallari</div>
                        </div>
                    </div>
                </div>
                <div className = 'float-right mx-5'>
                    <h3> Right side Form</h3>
                </div>
            </div>
        </nav>
    );
};

export default Footer;