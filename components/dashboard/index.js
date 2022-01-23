import React, { useState, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "../common/loader/loader";
import { query } from "../../services/grapghql";
import FilterContext from "../../services/context";
import { FiDownloadCloud } from "react-icons/fi";
import Button from "../common/button";
import AxieCard from "../axie-card/axie-card";

const backgroundImage =
  "url(https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";

export default function Dashboard() {
  const [axies, setAxies] = useState([]);
  const { filters, dispatch } = useContext(FilterContext);

  const { loading } = useQuery(query, {
    variables: filters,
    onCompleted: (data) => {
      if (filters.from === 0) {
        setAxies([...data.axies.results]);
      } else {
        setAxies([...axies, ...data.axies.results]);
      }
    },
  });

  const onLoadMore = () => {
    dispatch({ type: "LOAD" });
  };

  return (
    <main
      className="flex-1 overflow-y-auto p-5"
      style={{
        backgroundImage,
        backgroundRepeat: "round",
      }}
    >
      <div className="flex gap-5 flex-col flex-wrap items-center justify-around sm:flex-row">
        {axies &&
          axies.map((axie) => {
            return <AxieCard key={axie.id} axie={axie} />;
          })}
        {loading && <Loader />}
        {axies.length > 0 && (
          <Button
            onClick={onLoadMore}
            className="flex items-center justify-around bg-white hover:bg-gray-200 text-black text-center py-2 px-4 rounded"
          >
            <FiDownloadCloud className="mr-1.5" /> Load More
          </Button>
        )}
      </div>
    </main>
  );
}
