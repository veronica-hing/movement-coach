import React from 'react';


const SmBanner = () =>{
    return(
        <div className = 'bg-dark'>
        <div className = 'd-flex justify-content-center'>
            <a href= 'https://www.facebook.com/rhea.mallari' target = '_blank' className = "p-2">
                <img alt = 'My Facebook' src="../assets/smBanner/facebook-xxl2.png" width = '100' height = '100'/>
            </a>
            <a href = 'https://www.instagram.com/rheamallarii/' target = '_blank' className = "p-2">
                <img alt = 'My Instagram' src = '../assets/smBanner/facebook-xxl2.png' width = '100' height = '100'/>
            </a>
            <a href = 'https://www.youtube.com/channel/UCCFdBs1g_k7Q_-N8kTsJgOg' target = '_blank' className = "p-2">
                <img alt = 'My Channel' src = '../assets/smBanner/youtube1.png' width = '100' height = '100'/>
            </a>
        </div>
        </div>
    );
};

export default SmBanner;
