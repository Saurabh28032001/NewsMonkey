import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">
                        {props.source != null ? props.source : "Unknown"}
                    </span>
                </div>
                <img src={props.imageUrl != null ? props.imageUrl : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-success">By {props.author != null ? props.author : "Unknown"} on {new Date(props.publishedAt).toLocaleString()}</small></p>
                    <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem;
