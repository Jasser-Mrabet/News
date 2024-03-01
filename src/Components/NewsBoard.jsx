import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

// NewsBoard component responsible for fetching and displaying news articles based on the specified category
const NewsBoard = ({ category }) => {
    // State to hold the fetched articles
    const [articles, setArticles] = useState([]);

    // useEffect hook to fetch articles when the component mounts or when the category changes
    useEffect(() => {
        // Constructing the API URL for fetching news articles
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        // Fetching data from the API and updating the articles state
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]); // Dependency array ensures the effect runs when the category changes

    return (
        <div>
            {/* Displaying the title with a badge */}
            <h2 className="text-center"> Latest <span className="badge bg-danger">News</span> </h2>

            {/* Mapping over the articles and rendering NewsItem components */}
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

// Exporting the NewsBoard component
export default NewsBoard;
