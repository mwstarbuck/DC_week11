import React, { Component } from 'react';
export class Article extends Component {
    render() {
        return (
            <div className="articles-box">
                <div className="title-box">
                    <h2 class="article-title">{this.props.title}</h2>
                </div>
                <div className="article">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus ullam, aut, et unde dolorem soluta velit voluptatum aliquid quas perspiciatis, reiciendis blanditiis dignissimos quisquam quasi. Sunt nam iste possimus?</p>
                </div>
                <div className="comments">
                    <h4>{this.props.comment}</h4><h4>{this.props.like}</h4>
                </div>
            </div>
        )
    }
}
