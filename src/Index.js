import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import HomeFeed from "./Components/HomeFeed";
import PokemonPage from "./Components/PokemonPage";

const Index = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomeFeed}/>
      <Route path="/:pokemonId" component={PokemonPage} />
    </NativeRouter>
  );
};
AppRegistry.registerComponent("Pokedex", () => Index);
export default Index;
