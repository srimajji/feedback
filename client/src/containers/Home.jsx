import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AddNewButton from '../components/AddNewButton';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    {this.props.children}
                    <AddNewButton />
                </div>
            </div>
        );
    }
}

export default Home;