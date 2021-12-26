// rce 
import React, { Component } from 'react'

export class NewsItem extends Component {
    // constructor(){
    //     super();
    //     console.log("Hello I am a constructor");

    // }
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className=' d-flex justify-content-center mx-1'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" id='im1' alt="" style={{ height: '220px' }} />

                    <div className="card-body">
                        <h5 className="card-title">{title}  <span  style={{zIndex: '1', left: '85%'}} className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-outline-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
