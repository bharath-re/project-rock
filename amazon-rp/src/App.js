import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images,setImages]=useState([]);

  const HandleSubmit = async (term)=> {
    const result = await searchImages(term);
    setImages(result);

  }
  return (
    <div>
      <SearchBar onSubmit={HandleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
