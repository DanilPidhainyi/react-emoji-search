import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import Results from "./Results.js";
import data from "../json/data2.json";
import "./Container.css";
import ScrollToTopButton from "./ScrollToTopButton";
import {emj} from "../utils/defaultData.js";

function Container() {
  const [emojiData, setEmojiData] = useState([]);
  const [newEmojiData, setNewEmojiData] = useState(emj);
  const [searchQuery, setSearchQuery] = useState("default");

  useEffect(() => {
    setEmojiData(data);
  }, []);

  const [resultsIsLine, setResultIsLine] = useState(true)

  const onChange = useCallback((val) => {
    setSearchQuery(val.toLowerCase());

    const queryKeywords = val.toLowerCase().trim().split(" ");

    const newEmojis = [];

    const queryLength = queryKeywords.length;

    let queryLengthSum = 0;

    console.log("\n\n\n NEW LINE \n\n\n");

    if (val.toLowerCase() !== "") {
      emojiData.forEach((item) => {
        let removeDuplicates = [...new Set(item.keywords.trim().split(" "))];
        queryLengthSum = 0;
        queryKeywords.forEach((query) => {
          removeDuplicates.forEach((keyword) => {
            if (keyword.indexOf(query) >= 0) {
              queryLengthSum++;
            }
          });
        });

        if (queryLength <= queryLengthSum) {
          newEmojis.push(item);
        }
      });
    }

    setNewEmojiData(newEmojis);
  }, [setNewEmojiData, setSearchQuery, emojiData]);

  let search = <Search onChange={onChange} />

  return (
    <div className="container">
      <Header resultsIsLine={resultsIsLine} setResultIsLine={setResultIsLine}/>
      {resultsIsLine ? <></> : search}
      {!searchQuery ? (
          <p className="first-render">Type Keywords to Search</p>
      ) : (
          <Results isLine={resultsIsLine}
                   emojiFiltered={searchQuery === "" ? emojiData : newEmojiData}
          />)}
      {resultsIsLine ? search : <></>}
      <ScrollToTopButton />
    </div>
  );
}

export default Container;
