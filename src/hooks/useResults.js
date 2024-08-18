import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default useResult = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return {
    searchApi,
    results,
    errorMessage,
  };
};
