import {useReducer} from 'react';

const initialFilter = {
    from: 0,
    size: 20,
    sort: "PriceAsc",
    auctionType: "Sale",
    owner: null,
    criteria: {
      region: null,
      parts: null,
      bodyShapes: null,
      classes: null,
      stages: null,
      numMystic: null,
      pureness: null,
      title: null,
      breedable: null,
      breedCount: null,
      hp: [],
      skill: [],
      speed: [],
      morale: [],
      purity: [],
      numJapan: null,
      numXmas: null,
    },
    filterStuckAuctions: true,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return {
          ...state,
          sort:action.id,
          from:0
        }
      case "LOAD":
        return {
          ...state,
          from:state.from + 20
        }
      case "CLASS":
        return {
          ...state,
          from:0,
          criteria : {...state.criteria, classes:action.classes}
        }    
      default:
        return state;
    }
  };

export default function useFilters(){
    const [filters, dispatch] = useReducer(reducer, initialFilter);
    return [filters, dispatch];
}