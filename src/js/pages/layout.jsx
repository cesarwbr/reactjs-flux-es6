import React from 'react';
import { Link } from 'react-router';

import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';


export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, '/');
    }
    render() {
        return (
            <div>
                <Header />
                <Link to="/" class="btn">todos</Link>
                <Link to="settings" class="btn">settings</Link>

                {this.props.children}
                <Footer />
            </div>
        );
    }
}
