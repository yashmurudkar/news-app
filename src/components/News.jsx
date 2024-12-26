import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

function News({setProgress , category}) {
    const [articles, setArticles] = useState([])
    const [page , setPage] = useState(1)
    const [totalResults , setTotalResults] = useState(null)

    const fetchData = async () => {
        setProgress(10)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=c433ad42761747dcb1d177a6756765ba`
        );
        setProgress(40)
        const parseData = await response.json()
        setProgress(70)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setProgress(100)
        console.log(parseData)
    }
    
    const capitalizeFirstLetter = (word)=>{
        let firstCapLeter = word.charAt(0).toUpperCase()
        word = firstCapLeter + word.slice(1)
        return word
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&page=${
            page + 1
          }&category=${category}&apiKey=c433ad42761747dcb1d177a6756765ba`
        );
        
        setPage(page + 1)
        const parseData = await response.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }
    return (
        <>
        <h1 className='container d-flex mt-5' style={{justifyContent: 'center'}}>NewsApp - Top {capitalizeFirstLetter(category)} Headlines </h1>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore= {articles.length !== totalResults}> </InfiniteScroll>
        <div className='container'>
            <div className="d-flex flex-wrap"> 
                {articles.map((element)=> {
                    return <div className='col-4 mt-4' key={element.url}>
                    <NewsItem urlToImage = {element.urlToImage} title = {element.title} description={element.description} url={element.url} author={element.author}
                        date={element.publishedAt}/>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default News