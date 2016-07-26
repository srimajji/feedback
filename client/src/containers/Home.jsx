import React from 'react';
import Navbar from '../components/Navbar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Home;