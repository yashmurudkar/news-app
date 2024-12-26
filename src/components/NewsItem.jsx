import React from "react";

function NewsItem({ title, description, urlToImage, url, author, date }) {
  return (
    <div className="col-4 mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://images.firstpost.com/wp-content/uploads/2023/07/Untitled-design-2023-07-04T162122.745.jpg"
          }
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">
            {description != null ? description.slice(0, 80) + "..." : ""}
          </p>
          <p className="card-text">
            <small>
              By {author === null ? "Unknown" : author} published on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;