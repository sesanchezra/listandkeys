import React from 'react'

const CountryCard = ({country}) => {
    return (
        <div className='country-card'>
            <img src={country?.flags.png} alt="" />
            <h1>{country?.altSpellings[1]}</h1>
            <h3>{country?.capital[0]}</h3>
        </div>
    )
}

export default CountryCard
