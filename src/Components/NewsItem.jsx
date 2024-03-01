import React from 'react';
import image from '../assets/News.png';

// NewsItem component responsible for rendering an individual news item
const NewsItem = ({ title, description, src, url }) => {
  return (
    // Card container with styling
    <div className="card bg-dark text-light mb-4 mx-5" style={{ maxWidth: "350px", display: "inline-block", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.2s" }}>
      {/* Link to the full news article */}
      <a href={url} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
        {/* News image or a default image */}
        <img src={src ? src : image} style={{ height: "200px", width: "100%", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} className="card-img-top" alt={title || "Image"} />
        {/* Card body with news details */}
        <div className="card-body">
          {/* News title */}
          <h5 className="card-title" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title ? title.slice(0, 50) : 'Title not available'}</h5>
          {/* News description */}
          <p className="card-text" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>{description ? description.slice(0, 90) : "Description not available"}</p>
          {/* Button to read more */}
          <button className="btn btn-primary" style={{ fontSize: "0.9rem", fontWeight: "bold", textDecoration: "none", backgroundColor: "#007bff", border: "none", cursor: "pointer" }}>Read More</button>
        </div>
      </a>
    </div>
  );
}

// Exporting the NewsItem component
export default NewsItem;
