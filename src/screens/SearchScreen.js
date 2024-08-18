import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { searchApi, results, errorMessage } = useResult();

  const filteResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filteResultsByPrice("$")}
          title={"Cost Effective"}
        />
        <ResultsList
          results={filteResultsByPrice("$$")}
          title={"Bit Pricier"}
        />
        <ResultsList
          results={filteResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
