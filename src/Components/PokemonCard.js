import React from "react";
import LazyLoad from "react-lazyload";
import { StyleSheet, Text, View } from "react-native";
const LoadingPlaceHolder = () =>{
  return(
    <View style={[styles.card,styles.cardLoading]}>
       <Text style={styles.PktName}>Carregando...</Text>
    </View>
  )
}
const PokemonCard = ({ children, ...props }) => {
  return (
    <LazyLoad
      placeholder={<LoadingPlaceHolder/>}
      style={{ width: 100 + "%" }}
    >
      <View style={styles.card} {...props}>
        <View style={styles.PktNameContainer}>
          <Text style={styles.PktID}>#{props.id}</Text>
          <Text style={styles.PktName}>{props.name}</Text>
        </View>
        <img
          style={{
            width: "auto",
            position: "absolute",
            right: 0,
            height: 180 + "px",
          }}
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
            props.id +
            ".png"
          }
          alt={props.name}
        />
      </View>
    </LazyLoad>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DA5B60",
    width: "auto",
    margin: 1 + "em",
    borderRadius: 15,
    justifyContent: "left",
    minHeight: 10 + "em",
    boxShadow: "0px 7px 20px 0px #0000004f",
  },
  cardLoading:{
    backgroundColor: "#757575",
  },
  PktName: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 23,
    width: 100 + "%",
    color: "white",
  },
  PktID: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    width: 100 + "%",
    color: "#e0e0e0",
  },
  PktNameContainer: {
    textAlign: "left",
    width: 50 + "%",
    marginLeft: 30,
  },
});
