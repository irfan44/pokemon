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

export { GET_POKEMONS };
