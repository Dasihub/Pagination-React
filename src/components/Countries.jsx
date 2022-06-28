import React from "react";

const Countries = ({countries, loader}) => {

    if(loader) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <ul className="list-group mb-2">
            {
                countries.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item.name.common}
                        {item.flag}
                    </li>
                ))
            }
        </ul>
    )
}

export default Countries