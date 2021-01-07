import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import { useHistory, useParams } from "react-router-native";
import { POKEMONINFO_GET } from "../api";
const PokemonPage = ({ ...props }) => {
  const { pokemonId } = useParams();
  //
  const [pokminfo, setPokminfo] = useState("");
  async function getPokemons(ID) {
    if (!window.localStorage.getItem(`pokemonInfo_${ID}`)) {
      const { url } = POKEMONINFO_GET(ID);
      const response = await fetch(url);
      const json = await response.json();
      setPokminfo(json);
      window.localStorage.setItem(`pokemonInfo_${ID}`, JSON.stringify(json));
      //   console.log("request: " + json);
    } else {
      const dataPokemons = window.localStorage.getItem(`pokemonInfo_${ID}`);
      const json = JSON.parse(dataPokemons);
      setPokminfo(json);
    }
  }
  React.useEffect(() => {
    getPokemons(pokemonId);
  }, []);
  React.useEffect(() => {
    console.log(pokminfo);
  }, [pokminfo]);
  let history = useHistory();
  //
  return (
    <View>
      <button onClick={() => history.goBack()}>Voltar</button>
      <Image
        source={{
          uri:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
            pokemonId +
            ".png",
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
      <Text> {pokminfo.name} </Text>
      <View id="types">
        {pokminfo &&
          pokminfo.types.map((type) => {
            return <View>{type.type.name}</View>;
          })}
      </View>
      <View id="stats">
        {pokminfo &&
          pokminfo.stats.map((stats) => {
            return <View>{stats.stat.name} : {stats.base_stat}</View>;
          })}
      </View>
    </View>
  );
};

export default PokemonPage;
