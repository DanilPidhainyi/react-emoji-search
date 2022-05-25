import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Item from "./Item.js";
import Clipboard from "clipboard";
import "./Results.css";
import { useWindowSize } from 'usehooks-ts'


function Results({ emojiFiltered = [], isLine }) {
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
      clipboard.destroy();
    };
  });

  const { width, height } = useWindowSize()

  const lineItem = () => {
    return <div style={
      { display: 'flex',
        justifyContent: 'space-between',
        width: '70vw',
        //maxWidth: '70vw',
        margin: 'auto',
        transition: '0.8s'
      }
    }>
      {emojiFiltered
          .slice(0, Math.floor((width * 0.6) / 70))
          .map((emoji, index) => (
              <Item id={index} key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
          ))}
    </div>
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
