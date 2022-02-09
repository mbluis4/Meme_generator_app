import memes from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memes);

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
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="bottom text"
        ></input>

        <button className="form--button" onClick={getMemeImage}>
          Get a new Meme Image
        </button>
      </div>
      <img src={meme.randomImage} alt="meme"></img>
    </main>
  );
}
