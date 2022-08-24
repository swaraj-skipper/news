import React from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import { useEffect } from 'react'


export default function News() {
    const [post, setPost] = useState([])


    useEffect(() => {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7682976c26a7477c83f44a25f139bc71";
        fetch(url).then(resp => resp.json())
        .then(resp => setPost(resp)).catch((err) => console.log("bro error it is",err))
    }, [])


 
    return (

    <div className='container my-3 '>
        {/* <h3>This is a news Component</h3>
           <div className="col-md-4" >
                {post.length === 0 ?"": 
                    <NewsItem title={post.articles[0].title} description={post.articles[0].description.slice} imgUrl={post.articles[0].urlToImage} newsUrl={post.articles[0].url} />
                }
            </div>

            <hr /> */}
            <h3>This is a news Component</h3>
            <div className="row" >
                {post.length === 0 ? "" :
                    post.articles.map(elem => 
                        <div className="card col-md-4" style={{ width: "18rem" }} key = {elem.url}>
                            <NewsItem title={elem.title} description={elem.description} imgUrl={elem.urlToImage} newsUrl={elem.url} />
                            {/* <img src={elem.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{elem.title}...</h5>
                                <p className="card-text">{elem.description}...</p>
                                <a href={elem.url} target="blank" className="btn btn-sm btn-primary">More Info</a>
                            </div> */}
                        </div>
                        )
                }
            </div>
            {/* <NewsItem/> */}
    </div>
  )
}
