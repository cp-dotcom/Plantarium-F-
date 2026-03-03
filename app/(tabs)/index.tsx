import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Navbar from "../../components/Navbar";

export default function Home() {

  const router = useRouter();


  const styles = StyleSheet.create({
    // header: {
    //   backgroundColor: "#2f7d32",
    //   padding: 20,
    //   borderBottomLeftRadius: 20,
    //   borderBottomRightRadius: 20,
    //   borderTopLeftRadius: 20,
    //   borderTopRightRadius: 20,
    // },

    welcome: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },

    location: {
      color: "#ffffff",
      textAlign: "center",
    },

    searchBox: {
      backgroundColor: "#fff",
      margin: 15,
      padding: 10,
      borderRadius: 10,
      elevation: 3,
    },

    card: {
      backgroundColor: "#fff",
      borderRadius: 15,
      overflow: "hidden",
      flex: 1,
      margin: 8,
      elevation: 4,
    },

    cardImage: {
      height: 100,
    },

    cardText: {
      padding: 10,
      fontWeight: "bold",
    },

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 700,
    },

    button: {
      backgroundColor: "#1a4104ff",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 8,
    },
    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  // const [search, setSearch] = useState("");

  // const services = [
  //   { id: "1", name: "Garden Cleaning", image: "https://img.freepik.com/free-photo/green-houseplant-background-plant-lovers_53876-128849.jpg?semt=ais_user_personalization&w=740&q=80" },
  //   { id: "2", name: "Lawn Cutting", image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/09/Indoor-Plants-Guide-01-0505180010.jpg" },
  //   { id: "3", name: "Tree Trimming", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULcL_fMJE1TpbCYDRx3xqZrzvTrckzlo3QQ&s" },
  //   { id: "4", name: "Watering Plants", image: "https://hips.hearstapps.com/hmg-prod/images/best-indoor-plants-6741d38777f63.jpg?crop=1xw:0.4340763694522191xh;0,0.465xh" },
  //   { id: "5", name: "Plant Care", image: "https://cdn.decornation.in/wp-content/uploads/2016/11/house-plants-decor-grouping.jpg" },
  // ];

  // const filteredServices = services.filter(item =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (

    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/f2/42/f5/f242f526a5f69d860a5e78f22cd10afd.jpg"
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Navbar />
      {/* <View style={styles.header}> */}
      {/* <Text style={styles.welcome}>PLANTARIUM</Text>
      <Text style={styles.location}>Your Plant Care Companion</Text> */}
      {/* </View> */}

      {/* <View style={styles.searchBox}>
        <TextInput
          placeholder="Search services..."
          value={search}
          onChangeText={setSearch}
        />
      </View> */}

      {/* 
      <FlatList
        data={filteredServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 15 }}
      /> */}

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/products")}
        >
          <Text style={styles.text}>View Products</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}


