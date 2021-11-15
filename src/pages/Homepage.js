import React, { Component } from "react";
import "../styles/Homepage.css";
import Page from "./Page";
import List from "../components/List";
import PokeDexLogo from "../assets/PokeDex.png";
import Pagination from "../components/Pagination";

const PokeDexAPI = require("pokeapi-js-wrapper");

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    let options = {
      protocol: "https",
      versionPath: "/api/v2/",
      cache: true,
      timeout: 5 * 1000,
      cacheImages: true,
      limit: 10,
    };
    this.test = "MY TEST!";
    this.pokedex = new PokeDexAPI.Pokedex(options);
    this.pokemonUpdated = this.pokemonUpdated.bind(this);
  }

  pokemonUpdated(newList) {
    this.list = newList;
    this.render();
  }
  render() {
    return (
      <Page title="Pokedex" image={PokeDexLogo} image_alt={"PokeDex"}>
        <List list={this.list} />
        <Pagination limit={10} startIndex={0} listUpdated={this.pokemonUpdated} pokedex={this.pokedex}></Pagination>
      </Page>
    );
  }
}
