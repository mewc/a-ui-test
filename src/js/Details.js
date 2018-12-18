import React, { Component } from 'react';
import '../css/App.css';
import Chat from "./Chat";
import WagerActionCard from "./WagerActionCard";



class Details extends Component {
    render() {
        return <div>
            <WagerActionCard/>
            <Chat/>
        </div>
    }
}

export default Details;