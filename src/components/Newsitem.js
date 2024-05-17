import React, { Component } from 'react'
export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl,url,newsurl,page,author,date}=this.props;
    return (
 
      <div className='container my-3'>
        <div class="card" style={{width: "18rem;"}}>
  <img src={!imageurl?"https://cdn3.vectorstock.com/i/1000x1000/14/82/news-banner-vector-18471482.jpg":imageurl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text">{description}...</p>
    <a href={newsurl} target="_blank" class="btn  btn-sm btn-primary">Read more</a>
  <p class="card-text my-1"><small class="text-body-secondary">Published by {!author?'unknown':author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </div>

    )
  }
}

