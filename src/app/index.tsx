import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Profile Picture */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/profile.jpeg')}
            style={styles.profileImage}
          />
        </View>

        {/* Horizontal Line */}
        <View style={styles.line} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Chathurya</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <View style={styles.emailRow}>
          <Text style={styles.emailIcon}>✉</Text>
          <Text style={styles.value}>
            smcn2003@gmail.com
          </Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>

        <View style={styles.pointsRow}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.value}>0</Text>
        </View>

      </View>

      {/* Plus Button */}
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 60,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#ffb6c1',
    padding: 5,
  },

  profileImage: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },

  line: {
    height: 2,
    backgroundColor: '#333333',
    marginTop: 20,
    marginBottom: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 12,
  },

  value: {
    fontSize: 14,
    color: '#444444',
    marginTop: 5,
  },

  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  emailIcon: {
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
  },

  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  star: {
    fontSize: 18,
    color: '#000000',
    marginRight: 10,
  },

  plusButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  plusText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '300',
  },
});