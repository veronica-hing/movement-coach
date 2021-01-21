import React from 'react';
import Footer from './footer';
import SmBanner from './smBanner';

const Home = () => {
    //return only instead of render and return since static page for now   
    return (
    <React.Fragment>
        <h1>Banner</h1>
        <h2> Physical / Mental / Emotional / Spiritual</h2>
        <h2> Intro to Rhea</h2>
        <h3> Live classes w/ calendar plugin (todo)</h3>
        <h3> Instagram most recent posts plugin (todo)</h3>
        <Footer/>
    </React.Fragment>
    );
};

export default Home;