import React, { Component } from 'react';
import '../css/App.css';
import data from '../assets/testComments';
import FeedCard from "./FeedCard";
import Chat from "./Chat";
import WagerActionCard from "./WagerActionCard";



class Details extends Component {
    render() {
        let testData = data.feed;
        return <div>
            <WagerActionCard/>
            <Chat/>
        </div>
    }
}

export default Details;