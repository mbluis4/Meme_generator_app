import memes from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  console.log(meme.bottomText);

  const [allMemeImages, setAllMemeImages] = useState(memes);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getMemeImage = () => {
    const randNumber = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: allMemeImages.data.memes[randNumber].url,
      };
    });
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>

        <button className="form--button" onClick={getMemeImage}>
          Get a new Meme Image
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="random meme"
          className="meme--image"
        ></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
