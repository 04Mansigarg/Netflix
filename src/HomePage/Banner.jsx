import React from 'react'

export const Banner = () => {
    const obj = {
        "id": 27,
        "title": "From Up On Poppy Hill",
        "category": "Anime",
        "quality": ["Nostalgic", "Drama Anime", "Anime Movies"],
        "thumbnail": "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUltaPfUCBC5LIAKwWeLPsPAOJV0hadAeSRt29CaCWQbTL60l3xdpClw3GS2UsVgiSH6iKwgp-zrxbFh5et0YnqgOHE.jpg?r=95b",
        "match": 85,
        "certificate": "U/A 7+",
        "duration": "1h 31m"
    }
    console.log(obj.thumbnail)
    return (
        <div style={{
            backgroundImage: `url("${obj.thumbnail}")`, height: "80vh", width: "100%", backgroundPosition: "center",
            backgroundSize: "cover",
        }}>

        </div>
    )
}