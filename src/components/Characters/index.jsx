import { useState, useReducer, useMemo, useRef, useCallback, useEffect } from "react"
import "./Characters.css"
import Search from "../Search"
import useCharacters from "../../hooks/useCharacters"


const favoriteReducer = (state, action) =>
{
    switch(action.type) {
        case "ADD_TO_FAVORITES" :
            const isCurrentFavorite = state.favorites.some(favorite => {
               return favorite.id === action.payload.id
            })
            if (!isCurrentFavorite) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload],
                }
            }
            else return {...state}

        case "REMOVE_FROM_FAVORITES" :
            const newState = state.favorites.filter((favorite)=> {
               return favorite.id != action.payload.id
            })

            return {
                ...state,
                favorites: newState
            }

        default:
         return {...state};
    }
}

const Characters = ({isDarkMode}) => {
    const initialState = {
        favorites: []
    }

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState("")
    const searchInput = useRef(null);


    const API = "https://rickandmortyapi.com/api/character/"
    const characters = useCharacters(API)

    const addToFavorite = favorite => {
        dispatch({ type: "ADD_TO_FAVORITES", payload: favorite })
    }

    const removeFromFavorites = favorite => {
        dispatch({ type: "REMOVE_FROM_FAVORITES", payload: favorite})
    }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    const filteredCharacters = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),
        [characters, search]
    )
    

    return (
        <div className="main">
           {favorites.favorites.length > 0 && (
            <>
                <span className={`favoriteTitle  ${isDarkMode && "darkModeText"}`}>Favorite Characters</span>
                <div className="main-container">
                    {favorites.favorites.map(favorite => 
                    (
                         <div className={`character-container ${isDarkMode && "darkModeText darkModeContainer"}`} key={favorite.id}>
                            <img src={favorite.image} alt="a" />
                            <h2>Name: {favorite.name}</h2>
                            <h2>Status: {favorite.status}</h2>
                            <h2>Specie: {favorite.species}</h2>
                            <h2>Gender: {favorite.gender}</h2>
                            <h2>Origin: {favorite.origin.name}</h2>
                            <button type="button" className="favorite-button" onClick={() => removeFromFavorites(favorite)}>Remove from Favorites</button>
                        </div>
                    ))}
            </div>
            </>
           )}
            <span className={`charactersListTitle ${isDarkMode && "darkModeText"}`}>Characters List</span>  
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} isDarkMode={isDarkMode}/>
            <div className="main-container">
                {filteredCharacters.map(character => 
                (
                    <div className={`character-container ${isDarkMode && "darkModeText darkModeContainer"}`} key={character.id}>
                        <img src={character.image} alt="a" />
                        <h2>Name: {character.name}</h2>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin.name}</h2>
                        <button type="button" className="favorite-button" onClick={() => addToFavorite(character)}>Add to Favorites</button>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Characters