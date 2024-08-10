import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
   <>
   <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://source.unsplash.com/featured/300x201"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title?title:"This one is title"}...</h5>
                    <p className="card-text">{description?description:"this is a description"}...</p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
   </>
    )
  }
}
