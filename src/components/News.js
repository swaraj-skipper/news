import React from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [lomding, setLomding] = useState(false)
    // const [totalResult, setTotalResult] = useState(0)
    // const [damta, setDamta] = useState([])

    const pageSize = 12;

    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=aa7ac54820bd4532b3ca47c02fca65a2`;



    const handlePrevClick = () => {
        setPage(page - 1)
    }

    const handleNextClick = () => {
        // console.log(page)

        setPage((prevVal) => prevVal + 1);
    }

    const fetchDataFromApi = (pageX) => {
        // console.log(pageX)
        props.setProgress(20)
        setLomding(false)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageX}&pageSize=${pageSize}`;
        // props.setProgress(50)
        fetch(url).then(resp => resp.json())
            .then(resp => setPost(resp)).then(props.setProgress(50)).catch((err) => console.log("bro error it is", err))
        document.title = `Newms - ${capitalize(props.category)}`
        setLomding(true)
        props.setProgress(100)
        // setTotalResult(20)
        
    }

    // const fetchMoreData = () => {
    //     console.log("fetch more data called",page)
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${aa7ac54820bd4532b3ca47c02fca65a2}&page=${page+1}&pageSize=${pageSize}`;
    //     // setLomding(false)
    //     fetch(url).then(resp => resp.json())
    //         .then(resp => {
    //             setDamta(resp.articles);
    //             console.log(damta);
    //         }).catch((err) => console.log("bro error it is", err))
    //     setPost([...post,...damta])
    //     setPage(page+1);

    //     // setTotalResult(damta.totalResults)
    // }

    useEffect(() => {
        fetchDataFromApi(page)
        // console.log("useEffect")
    }, [page])


    const capitalize = (x) => {
        let iniLet = x[0];
        let y = iniLet.codePointAt(0);
        y = y - 32;

        let z = "";
        for (let i = 1; i < x.length; i++) {
            z += x[i];
        }

        let w = String.fromCharCode(y);
        let ans = w + z;

        return ans;
    }


    const hope = () => {
        // console.log(damta.length + " " + post.articles.length)
        console.log(post.articles.length)
        console.log(props.prog)
        // console.log(damta)
        // fetchMoreData()
    }

    // useEffect(() => {
    //     const scrolling_function = () => {
    //         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
    //             console.log("fetching more.........")
    //             // window.removeEventListener('scroll', scrolling_function)
    //             hope()
    //             if(post.length === 30)
    //             {
    //                 console.log("WAITTTTTTTTTTTTTS")
    //             }
    //         }
    //         }
    //     window.addEventListener('scroll', scrolling_function);
    // }, )


    return (
        <>
            <h3 style={{ color: "white", display:"flex",alignItems:"center",justifyContent:"center", marginTop:"5rem" }}>Top Headlines - {capitalize(props.category)}</h3>
            {!lomding && <Spinner />}
            <div className='container-fluid flexi my-3'>

                {/* <button onClick={hope}>k</button> */}

                <div className="boxi">
                    <button disabled={page <= 1} onClick={handlePrevClick} className="butt">&larr;</button>
                    {/* <button disabled={page >= post.totalResults / pageSize} onClick={handleNextClick} className="butt">&rarr;</button> */}
                </div>

                <div className='mid'>
                    {/* <InfiniteScroll
                    dataLength={post.length}
                    next = {hope}
                    hasMore={post.length === 6}
                    loader={<Spinner/>}
                > */}
                    {!lomding || post.length === 0 ? "" :
                        post.articles.map(elem =>
                            <div className="news-article" key={elem.url}>
                                <NewsItem title={elem.title} description={elem.description} imgUrl={elem.urlToImage} newsUrl={elem.url}
                                    date={elem.publishedAt} author={elem.author} source={elem.source.name} />
                            </div>
                        )
                    }
                    {/* </InfiniteScroll> */}
                </div>
                <div className="boxi">
                    {/* <button disabled={page<=1} onClick={handlePrevClick} className="butt">&larr;</button> */}
                    <button disabled={page >= post.totalResults / pageSize} onClick={handleNextClick} className="butt">&rarr;</button>
                </div>

            </div>
            <div className="boxi-phone">
                <button disabled={page<=1} onClick={handlePrevClick} className="butt-phone">&larr;</button>
                <button disabled={page >= post.totalResults / pageSize} onClick={handleNextClick} className="butt-phone">&rarr;</button>
            </div>
        </>
    )
}
