import React, { useState } from "react";
import { myLinks } from "../myDatabase/myDatabase";
import "./MyLinks.css";
const MyLinks = () => {
  const [Check, setCheck] = useState(false);
  const MyLinksHandler = (event) => {
    event.preventDefault();
    setCheck(!Check);
  };
  return (
    <div className="MyLists">
      <a
        className={Check ? `c1-active` : `c1`}
        href={myLinks[0].ChannelLink}
        target="_blank"
      >
        <img title={myLinks[0].ChannelName} src={myLinks[0].ChannelImage} />
      </a>
      <a
        className={Check ? `c2-active` : `c2`}
        href={myLinks[1].ChannelLink}
        target="_blank"
      >
        <img src={myLinks[1].ChannelImage} title={myLinks[1].ChannelName} />
      </a>
      <button className="btn" type="submit" onClick={MyLinksHandler}>
        {Check ? `x` : `+`}
      </button>

      <a
        className={Check ? `c3-active` : `c3`}
        href={myLinks[2].ChannelLink}
        target="_blank"
      >
        <img src={myLinks[2].ChannelImage} title={myLinks[2].ChannelName} />
      </a>

      <a
        className={Check ? `c5-active` : `c5`}
        href={myLinks[3].ChannelLink}
        target="_blank"
      >
        <img src={myLinks[3].ChannelImage} title={myLinks[3].ChannelName} />
      </a>
    </div>
  );
};

export default MyLinks;
