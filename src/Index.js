import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ALLPOKEMONS_GET } from "./api";
import PokemonCard from "./Components/pokemonCard/PokemonCard";

const Index = () => {
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
    <View style={styles.container}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
