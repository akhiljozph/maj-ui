import React, { useState } from "react";

import "./MajRating.css";
import { MajRatingProps } from "./MajRating.types";

const MajRating: React.FC<MajRatingProps> = (props) => {

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    const [ rating, setRating ] = useState(0);


    return (
        <div>
            <h1>{ props.title }</h1>
            {
                stars.map((star, index) => {
                    const starCSS = star <= rating ? "star-active" : "star-inactive";

                    return (
                        <button disabled={props.disabled} 
                            data-testid={`${props.testIdPrefix}-${index}`} 
                            key={index} 
                            className={`${starCSS}`}
                            onClick={() => setRating(star)}
                        >
                            <span className="star">⭐</span>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default MajRating;