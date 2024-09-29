import React, { useState, useRef } from 'react';
import './img_generator.css';
import robot from '../assets/robot.png';
import loadingGif from '../assets/loading.gif';
import backgroundVideo from '../assets/bg_video.mp4';

const ImgGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Function to call the Hugging Face API and get the image
  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return;
    }

    setLoading(true); // Show the loading GIF

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: inputRef.current.value }),
        }
      );
      
      if (!response.ok) {
        console.error('Error response from API:', response);
        setLoading(false);
        return;
      }

      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false); // Hide the loading GIF after processing
    }
  };

  return (
    <div className="image-generator">
      {/* Background Video */}
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="heading">AI IMAGE GENERATOR</div>
      <div className="image-container">
        <div className="img">
          {loading ? (
            <img src={loadingGif} alt="Loading..." /> // Show loading GIF while generating image
          ) : (
            <img src={imageUrl === "/" ? robot : imageUrl} alt={imageUrl === "/" ? "Placeholder for AI generated image" : "AI generated result"} />
          )}
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe the image in your mind..."
        />
        <div className="button-85" onClick={imageGenerator}>
          Generate
        </div>
      </div>
      <div className='download-button'>
      {/* Conditionally render the download button once an image is generated */}
      {imageUrl !== "/" && !loading && (
         <a href={imageUrl} download="generated_image.png" className="button-18">
          Download Image
        </a>
      )}
    </div>
    </div>
  );
};

export default ImgGenerator;


