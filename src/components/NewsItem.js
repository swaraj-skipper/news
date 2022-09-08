import React from 'react'

export default function NewsItem(props) {


  let GMT = props.date;
  let perfectTime = new Date(GMT)
  // console.log(perfectTime.toUTCString())
// console.log(perfectTime.toISOString())
    return (
    <>
          <div className="cont">
                  <div className="cardi">
                      <h5 className="title"><a className='title' href={props.newsUrl} target="blank">{props.title}</a></h5>
                      <p className="card-text card-description">{!props.description?"Click on the above link for more info":props.description}...</p>
                      <hr />
                      <div className='flexing'>
                        <p className='bottom'>By {!props.author?"author":props.author} on {new Date(props.date).toUTCString()}</p>
                        <p className='source'>{props.source}</p>
                      </div>

                  </div>
          <a className='pici' href={props.newsUrl} target="blank"><img className='imgi' src={!props.imgUrl ? "https://dg31sz3gwrwan.cloudfront.net/fanart/368787/1383613-0-q80.jpg" : props.imgUrl} alt="..." /></a>
          </div>
    </>
  )
}
