import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { COUNTRY_QUERY, COUNTRY_CODE_QUERY } from "./Queries";
import { useQuery, gql } from "@apollo/client";

export default function Home({ navigation }) {
  const { loading, error, data } = useQuery(COUNTRY_QUERY);

  const { loading2, error2, data: data2 } = useQuery(COUNTRY_CODE_QUERY);

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    } else if (error) {
      console.log("Error");
    } else {
      console.log("Country  Query ==", data);
      // console.log("Country Query ===", loading);
      console.log("HumanName ===", data2);
    }
  }, [loading]);

  useEffect(() => {
    if (loading2) {
      console.log("Loading2");
    } else if (error2) {
      console.log("Error2");
    } else {
      console.log("Country  Query ==", data);
      // console.log("Country Query ===", loading);
      console.log("HumanName ===", data2);
    }
  }, [loading]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 38, justifyContent: "center" }}> GraphQL </Text>
      {loading ? (
        ""
      ) : (
        <FlatList
          data={data?.countries}
          renderItem={({ item }) => (
            <View
              style={{ backgroundColor: "green", marginBottom: 10, height: 40 }}
            >
              <Text style={{ color: "white" }}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
