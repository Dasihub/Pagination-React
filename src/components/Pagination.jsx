import React from "react";

const Pagination = ({countryPerPage, totalCountries, paginate}) => {
    const pageNumbers = []
    console.log(pageNumbers)

    // React.useEffect(() => {
        // console.log(Math.ceil(totalCountries / countryPerPage))
        // if(totalCountries) {
            for (let i = 1; i < Math.ceil(totalCountries / countryPerPage); i++) {
                pageNumbers.push(i)
            }
        // }
    // }, [totalCountries])

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(item => (
                        <li className="page-item" key={item}>
                            <a
                                href="#"
                                className="page-link"
                                onClick={paginate.bind(null, item)}
                            >{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination