import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import SearchScreen from "./src/components/screen/SearchScreen";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#FD6E58" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <SearchScreen />
      </SafeAreaView>
    </>
  );
}
