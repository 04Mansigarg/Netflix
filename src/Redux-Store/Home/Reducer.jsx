import { AUTH, EMAIL, GETUserDATA, GET_ANIME, GET_AWARDWINNING, GET_BOLLYWOOD, GET_DOCUSERIESSHOWS, GET_HOLLYWOOD, GET_HORRORTVSHOWS, GET_INDIANTVSHOWS, Get_MOVIES, GET_ROMANCETVSHOWS, Get_TVSHOWS, PASSWORD } from "./ActionTypes"


const init = {
    loading: false,
    error: false,
    indian_tv: [],
    horror_tv: [],
    romance_tv: [],
    docuseries_tv: [],
    anime: [],
    bollywood: [],
    hollywood: [],
    awardwinning: [],
    tv_shows: [],
    movies: [],
    email: "",
    password: "",
    userData: [],
    auth:false

}

export const reducer = (state = init, { type, payload }) => {

    switch (type) {
        case GET_INDIANTVSHOWS:
            return {
                ...state,
                indian_tv: payload
            }
        case GET_ROMANCETVSHOWS:
            return {
                ...state,
                romance_tv: payload
            }
        case GET_HORRORTVSHOWS:
            return {
                ...state,
                horror_tv: payload
            }
        case GET_DOCUSERIESSHOWS:
            return {
                ...state,
                docuseries_tv: payload
            }
        case GET_ANIME:
            return {
                ...state,
                anime: payload
            }
        case GET_AWARDWINNING:
            return {
                ...state,
                awardwinning: payload
            }
        case GET_BOLLYWOOD:
            return {
                ...state,
                bollywood: payload
            }
        case GET_HOLLYWOOD:
            return {
                ...state,
                hollywood: payload
            }
        case Get_TVSHOWS:
            return {
                ...state,
                tv_shows: payload
            }
        case Get_MOVIES:
            return {
                ...state,
                movies: payload
            }
        case EMAIL:
            return {
                ...state,
                email: payload
            }
        case PASSWORD:
            return {
                ...state,
                password: payload
            }
        case GETUserDATA:
            return {
                ...state,
                userData: payload
            }
        case AUTH:
            return {
                ...state,
                auth: payload
            }
        default: return state


    }

}