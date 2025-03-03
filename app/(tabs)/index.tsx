import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

//Empty board initialized with null
const [board, setBoard] = useState(Array(9).fill(null));

export default function HomeScreen() {
  // Function for rendering squares
  const renderSquare = (index) => {
    return (
      <TouchableOpacity style={styles.square}>
        <ThemedText style={styles.squareText}>{board[index]}</ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tic Tac Toe</ThemedText>
      </ThemedView>

      {/* Game board */}
      <ThemedView style={styles.boardContainer}>
        <View style={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  gameStatusContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  boardContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  boardRow: {
    flexDirection: "row",
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  squareText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  helpContainer: {
    gap: 8,
    marginBottom: 16,
  },
});

