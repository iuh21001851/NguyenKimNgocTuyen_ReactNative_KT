import { AntDesign } from "@expo/vector-icons";

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen_03 = ({ route }) => {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: bike.image }}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{bike.name}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {bike.discount} | {bike.originalPrice}$
            </Text>

            <Text style={styles.currentPrice}>{bike.price}$</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>

            <Text style={styles.descriptionText}>{bike.description}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F7F7F7",

    padding: 10,
  },

  card: {
    backgroundColor: "white",

    borderRadius: 20,

    overflow: "hidden",
  },

  imageContainer: {
    height: 300,

    backgroundColor: "#FFF1F0",

    justifyContent: "center",

    alignItems: "center",
  },

  bikeImage: {
    width: "80%",

    height: "80%",
  },

  contentContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 10,
  },

  priceContainer: {
    flexDirection: "row",

    alignItems: "center",

    gap: 10,

    marginBottom: 20,
  },

  priceText: {
    fontSize: 16,

    color: "#666",
  },

  currentPrice: {
    fontSize: 18,

    fontWeight: "bold",

    color: "#FF4444",
  },

  descriptionContainer: {
    marginBottom: 20,
  },

  descriptionTitle: {
    fontSize: 20,

    fontWeight: "bold",

    marginBottom: 8,
  },

  descriptionText: {
    fontSize: 16,

    color: "#666",

    lineHeight: 22,
  },

  buttonContainer: {
    flexDirection: "row",

    alignItems: "center",

    gap: 15,

    marginTop: 20,
  },

  heartButton: {
    width: 50,

    height: 50,

    borderRadius: 25,

    borderWidth: 1,

    borderColor: "#ddd",

    justifyContent: "center",

    alignItems: "center",
  },

  addButton: {
    flex: 1,

    height: 50,

    backgroundColor: "#FF4444",

    borderRadius: 25,

    justifyContent: "center",

    alignItems: "center",
  },

  addButtonText: {
    color: "white",

    fontSize: 16,

    fontWeight: "bold",
  },
});

export default Screen_03;
