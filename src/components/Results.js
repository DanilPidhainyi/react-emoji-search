import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Item from "./Item.js";
import Clipboard from "clipboard";
import "./Results.css";



function Results({ emojiFiltered = [], isLine }) {
  console.log(emojiFiltered)
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
      clipboard.destroy();
    };
  });

  const lineItem = () => {
    return emojiFiltered
        .slice(0, 11)
        .map((emoji, index) => (
            <Item id={index} key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
        ))
  }

  const fullItem = () => {
    return emojiFiltered
        .slice(0, 150)
        .map((emoji, index) => (
            <Item id={index} key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
        ))
  }

  return (
      <div className={'results'}>
        {
          (emojiFiltered.length) ? (
              isLine ? (
                  lineItem()
              ) : (
                  fullItem()
              )
          ) : (
            <p className="no-result">No Results Found</p>
          )
          }
      </div>
  );
}


Item.defaultProps = {
  emojiFiltered: []
};

Item.propTypes = {
  emojiFiltered: PropTypes.array
}

export default Results;
