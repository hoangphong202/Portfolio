import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';
import About from '../components/About/About';

Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <Layout />
            <Main />
            <About />
        </>
    );
}

export default Home;