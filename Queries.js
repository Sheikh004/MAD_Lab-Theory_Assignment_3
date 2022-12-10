import { gql } from "@apollo/client";

export const COUNTRY_QUERY = gql`
  query CountryQuery {
    countries {
      name
    }
  }
`;

export const COUNTRY_CODE_QUERY = gql`
  query {
    country(code: "BR") {
      name
      capital
      code
      native
      emoji
      currency
    }
  }
`;
