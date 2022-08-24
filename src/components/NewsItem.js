import React from 'react'

export default function NewsItem(props) {
    return (
    <>
          <div className="card" style={{width: "18rem"}}>
            {/* <h3>BHAI SAAB </h3> */}
              <img src={props.imgUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{props.title.slice(0,80)}...</h5>
                      <p className="card-text card-description">{props.description}...</p>
                      <a href={props.newsUrl} target="blank" className="btn btn-sm btn-primary">More Info</a>
                  </div>
          </div>
    </>
  )
}
