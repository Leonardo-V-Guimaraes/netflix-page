/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    return (
        <section className="featured">
            <div>{item.original_name}</div>
        </section>
    );
}