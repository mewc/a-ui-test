import React, { Component } from 'react';
import '../css/App.css';
import data from '../assets/testFeedData';
import FeedCard from "./FeedCard";



class Feed extends Component {
    render() {
        let testData = data.feed;
        return <React.Fragment>
            {testData.map((item,i) => {
                return <FeedCard key={i} item={item} style={{padding: '10px'}}/>;
                }
            )}
        </React.Fragment>
    }
}

export default Feed;