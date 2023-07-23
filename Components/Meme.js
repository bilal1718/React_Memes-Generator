import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    function handleClick(event){
      const {name,value}=event.target
         setMeme(prevMeme => ({
          ...prevMeme,
          [name]:value,
         }))
    }
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(()=>{
      async function getMemes(){
        const response=await fetch("https://api.imgflip.com/get_memes")
        const data=await response.json();
        setAllMemeImages(data.data.memes);
      }
      getMemes();
    },[])
    
    
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        setMeme(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url
        }))
        
    }
    function handleSubmit(event){
      event.preventDefault();
    }
  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="formInput" name="topText" value={meme.topText} onChange={handleClick} />
        <input type="text" className="formInput" name="bottomText" value={meme.bottomText} onChange={handleClick} />
        <button className="formButton" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
       
      </form>
    </main>
  );
}
