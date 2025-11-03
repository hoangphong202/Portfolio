import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';

Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <Layout />
            <Main />
        </>
    );
}

export default Home;