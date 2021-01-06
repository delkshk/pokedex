export const API_URL = "https://pokeapi.co/api/v2";
export function ALLPOKEMONS_GET() {
    return{
        url : API_URL+"/pokedex/1",
        options:{
            method: "GET"
        }
    }
}