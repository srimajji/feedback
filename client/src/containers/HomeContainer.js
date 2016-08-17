import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

class HomeContainer extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <Card title={'Feedbacks'} body={'3'}/>
                    <Card title={'Companies'} body={'3'}/>
                    <Card title={'Users'} body={'3'}/>
               </div>
            </div>
        );
    }
}

export default HomeContainer;