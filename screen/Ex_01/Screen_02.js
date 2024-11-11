import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import React, { useEffect } from "react";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { fetchBikes, setSelectedCategory } from "../../redux/bikesSlice";

const Screen_02 = () => {
  const dispatch = useDispatch();

  const {
    items: bikes,

    status,

    error,

    selectedCategory,

    addStatus,

    addError,
  } = useSelector((state) => state.bikes);

  const navigation = useNavigation();

  const categories = ["All", "Roadbike", "Mountain"];

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  const filteredBikes =
    selectedCategory === "All"
      ? bikes
      : bikes.filter((bike) => bike.category === selectedCategory);

  const handleBikePress = (bike) => {
    navigation.navigate("Screen_03", { bike });
  };

  const renderBikeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bikeCard}
      onPress={() => handleBikePress(item)}
    >
      <TouchableOpacity style={styles.favoriteButton}>
        <AntDesign name="hearto" size={20} color="#666" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.bikeName}>{item.name}</Text>

      <Text style={styles.bikePrice}>$ {item.price}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (category) => {
    dispatch(setSelectedCategory(category));
  };

  if (status === "loading") {
    return (
      <View style={styles.container}>
        <Text>Đang tải...</Text>
      </View>
    );
  }

  if (status === "failed") {
    return (
      <View style={styles.container}>
        <Text>Lỗi: {error}</Text>
      </View>
    );
  }

  if (addStatus === "loading") {
    return (
      <View style={styles.container}>
        <Text>Đang thêm xe mới...</Text>
      </View>
    );
  }

  if (addStatus === "failed") {
    return (
      <View style={styles.container}>
        <Text>Lỗi khi thêm: {addError}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>The world's Best Bike</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Screen_AddBike")}
        >
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,

              category === selectedCategory && styles.activeCategoryButton,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text
              style={[
                styles.categoryText,

                category === selectedCategory && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bike Grid using FlatList */}

      <FlatList
        data={filteredBikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.bikeGrid}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",

    padding: 16,
  },

  title: {
    fontSize: 24,

    fontWeight: "bold",

    color: "#FF4444",

    marginBottom: 20,
  },

  categoriesContainer: {
    flexDirection: "row",

    marginBottom: 20,

    gap: 10,
  },

  categoryButton: {
    paddingHorizontal: 20,

    paddingVertical: 8,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: "#ddd",
  },

  activeCategoryButton: {
    backgroundColor: "#FF4444",

    borderColor: "#FF4444",
  },

  categoryText: {
    color: "#666",
  },

  activeCategoryText: {
    color: "white",
  },

  flatListContent: {
    paddingBottom: 20,
  },

  bikeGrid: {
    justifyContent: "space-between",
  },

  bikeCard: {
    width: "48%",

    backgroundColor: "#FFF1F0",

    borderRadius: 20,

    padding: 12,

    marginBottom: 16,
  },

  favoriteButton: {
    position: "absolute",

    right: 12,

    top: 12,

    zIndex: 1,
  },

  imageContainer: {
    aspectRatio: 1,

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 8,
  },

  bikeImage: {
    width: "80%",

    height: "80%",
  },

  bikeName: {
    fontSize: 16,

    fontWeight: "500",

    marginBottom: 4,
  },

  bikePrice: {
    fontSize: 16,

    fontWeight: "bold",

    color: "#FF4444",
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 20,
  },

  addButton: {
    backgroundColor: "#FF4444",

    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: "center",

    alignItems: "center",
  },
});

export default Screen_02;
