import React, { Component } from 'react';
// import Out from './Out';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    verifyRoute = () => {
        console.log('TOKENNN:::',localStorage.getItem('token'));
        if (!localStorage.getItem('token')) {
            return this.props.history.push('/login');
        }
    };
    render() {
        this.verifyRoute();
        return (
            <div>
                <p>Usted está logueado</p>
                {/* <Out /> */}
            </div>
        );
    }
}

// export default withRouter(Home);
export default Home;