import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from '../../redux/bikesSlice';
import { useNavigation } from '@react-navigation/native';

const Screen_AddBike = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [newBike, setNewBike] = useState({
    name: '',
    category: 'Mountain',
    price: '',
    originalPrice: '',
    discount: '',
    description: '',
    image: '',
  });

  const handleAddBike = async () => {
    try {
      // Chuyển đổi giá từ string sang number
      const bikeData = {
        ...newBike,
        price: Number(newBike.price),
        originalPrice: Number(newBike.originalPrice),
      };
      
      await dispatch(addBike(bikeData)).unwrap();
      navigation.navigate('Screen_02');
    } catch (error) {
      console.error('Failed to add bike:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Bike</Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={newBike.name}
            onChangeText={(text) => setNewBike({ ...newBike, name: text })}
            placeholder="Enter bike name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryButtons}>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                newBike.category === 'Mountain' && styles.activeCategoryButton,
              ]}
              onPress={() => setNewBike({ ...newBike, category: 'Mountain' })}
            >
              <Text style={[
                styles.categoryButtonText,
                newBike.category === 'Mountain' && styles.activeCategoryText,
              ]}>Mountain</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                newBike.category === 'Roadbike' && styles.activeCategoryButton,
              ]}
              onPress={() => setNewBike({ ...newBike, category: 'Roadbike' })}
            >
              <Text style={[
                styles.categoryButtonText,
                newBike.category === 'Roadbike' && styles.activeCategoryText,
              ]}>Roadbike</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price ($)</Text>
          <TextInput
            style={styles.input}
            value={newBike.price}
            onChangeText={(text) => setNewBike({ ...newBike, price: text })}
            placeholder="Enter price"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Original Price ($)</Text>
          <TextInput
            style={styles.input}
            value={newBike.originalPrice}
            onChangeText={(text) => setNewBike({ ...newBike, originalPrice: text })}
            placeholder="Enter original price"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Discount</Text>
          <TextInput
            style={styles.input}
            value={newBike.discount}
            onChangeText={(text) => setNewBike({ ...newBike, discount: text })}
            placeholder="Enter discount (e.g., 15% OFF)"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={newBike.image}
            onChangeText={(text) => setNewBike({ ...newBike, image: text })}
            placeholder="Enter image URL"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={newBike.description}
            onChangeText={(text) => setNewBike({ ...newBike, description: text })}
            placeholder="Enter description"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddBike}>
          <Text style={styles.addButtonText}>Add Bike</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4444',
    marginBottom: 20,
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonText: {
    color: '#666',
  },
  activeCategoryButton: {
    backgroundColor: '#FF4444',
    borderColor: '#FF4444',
  },
  activeCategoryText: {
    color: 'white',
  },
  addButton: {
    backgroundColor: '#FF4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen_AddBike; 