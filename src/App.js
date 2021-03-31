import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import gif from "./components/preloader.gif";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="imageCardContainer">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="noImagesFound">No Images Found</h1>
      )}

      {isLoading ? (
        <div className="preloader">
          <img src={gif} alt="preloader" />
        </div>
      ) : (
        <div className="imageGrid">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
