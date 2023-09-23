import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      __typename
    }
  }
`;

const GET_POKEMON_BY_NAME = gql`
  query pokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      weight {
        minimum
        maximum
        __typename
      }
      height {
        minimum
        maximum
        __typename
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          __typename
        }
        special {
          name
          type
          __typename
        }
        __typename
      }
      weaknesses
      evolutions {
        id
        name
        image
        __typename
      }
      __typename
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON_BY_NAME };
