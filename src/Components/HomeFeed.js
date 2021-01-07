import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ALLPOKEMONS_GET } from "../api";

const HomeFeed = () => {
  const [pkto, setPkto] = useState("");
  async function getPokemons() {
    if (!window.localStorage.getItem("getPokemons")) {
      const { url } = ALLPOKEMONS_GET();
      const response = await fetch(url);
      const json = await response.json();
      setPkto(json);
      window.localStorage.setItem("getPokemons", JSON.stringify(json));
      console.log("request: " + json);
    } else {
      const dataPokemons = window.localStorage.getItem("getPokemons");
      const json = JSON.parse(dataPokemons);
      setPkto(json);
    }
  }
  React.useEffect(() => {
    getPokemons();
  }, []);
  return (
    <ScrollView>
      {pkto &&
        pkto.pokemon_entries.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.entry_number}
              name={pokemon.pokemon_species.name}
              id={pokemon.entry_number}
            ></PokemonCard>
          );
        })}
    </ScrollView>
  );
};

export default HomeFeed;
