import { gql } from "@apollo/client";

export const query = gql`
  query GetAxieBriefList(
    $auctionType: AuctionType
    $criteria: AxieSearchCriteria
    $from: Int
    $sort: SortBy
    $size: Int
    $owner: String
    $filterStuckAuctions: Boolean
  ) {
    axies(
      auctionType: $auctionType
      criteria: $criteria
      from: $from
      sort: $sort
      size: $size
      owner: $owner
      filterStuckAuctions: $filterStuckAuctions
    ) {
      total
      results {
        ...AxieBrief
        __typename
      }
      __typename
    }
  }

  fragment AxieBrief on Axie {
    id
    name
    stage
    stats {
      hp
      morale
      skill
      speed
    }
    class
    breedCount
    image
    title
    battleInfo {
      banned
      __typename
    }
    auction {
      currentPrice
      currentPriceUSD
      __typename
    }
    parts {
      id
      name
      class
      type
      specialGenes
      __typename
    }
    __typename
  }
`;