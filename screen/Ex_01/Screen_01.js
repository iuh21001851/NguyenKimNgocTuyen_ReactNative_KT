import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Screen_01 = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate("Screen_02");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.subtitle}>
          A premium online store for{"\n"}
          sporter and their stylish choice
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/blue_bike.png")}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>POWER BIKE</Text>
          <Text style={styles.title}>SHOP</Text>
        </View>

        <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    backgroundColor: "#FFF1F0",
    borderRadius: 30,
    padding: 32,
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  bikeImage: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#EF4444",
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Screen_01;
