import React from 'react';
import { Link } from 'react-router';

class Feedback extends React.Component {
    render() {
        return (
            <div>
                <h1>Feedback app</h1>
                <h3>This is a feedback tool</h3>
                <Link to="admin">Admin</Link>
            </div>
        );
    }
}

export default Feedback;