import React, { useState } from "react";

const Like = () => {
    let [like, setLike] = useState(0);
    let [heart, setHeart] = useState(false);
    return(
        
            <div>
                <h1>Like</h1>
                <div id="heart" onClick={() => {
                    setHeart(!heart);
                    setLike(like + 1);
                }}
                style={{
                    fontSize:"50px",
                    cursor: "pointer"
                }}
                >
                    {heart ? "❤️" : "🤍"}
                </div>
                <br />
                <p>{like}</p>
            </div>
    )
}

export default Like