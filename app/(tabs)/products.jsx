import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
    LayoutAnimation,
    Animated,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "../../components/Navbar";

export default function Products() {
    const router = useRouter();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [expandedId, setExpandedId] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Shimmer animation value
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    // ✅ Fetch products
    useEffect(() => {
        setLoading(true);

        axios
            .get("http://172.16.1.15:5000/api/products")
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    // ✅ Shimmer animation loop
    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: false,
                })
            ).start();
        }
    }, [loading]);

    const shimmerColor = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["#e0e0e0", "#f5f5f5"],
    });

    const filteredProducts = products.filter((item) =>
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
    );

    const toggleExpand = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedId(expandedId === id ? null : id);
    };

    const renderProduct = ({ item }) => {
        const isExpanded = expandedId === item._id;

        return (
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9}
                onPress={() => toggleExpand(item._id)}
            >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>

                {isExpanded && (
                    <View style={styles.detailsBox}>
                        <Text style={styles.details}>{item.details}</Text>

                        <TouchableOpacity
                            style={styles.cartButton}
                            onPress={() =>
                                router.push({
                                    pathname: "/buynow",
                                    params: {
                                        id: item._id,
                                        name: item.name,
                                        price: item.price,
                                        details: item.details,
                                        image: item.image,
                                    },
                                })
                            }
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>
                                Buy now
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    // ✅ Skeleton Card
    const renderSkeleton = () => {
        return (
            <View style={styles.card}>
                <Animated.View
                    style={[
                        styles.skeletonImage,
                        { backgroundColor: shimmerColor },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.skeletonTitle,
                        { backgroundColor: shimmerColor },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.skeletonPrice,
                        { backgroundColor: shimmerColor },
                    ]}
                />
            </View>
        );
    };

    return (
        <>
            <Navbar />

            <View style={styles.searchBox}>
                <TextInput
                    placeholder="Search plants..."
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            <ImageBackground
                source={{
                    uri: "https://images.unsplash.com/photo-1543459176-4426b37223ba",
                }}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <FlatList
                        data={loading ? Array(6).fill({}) : filteredProducts}
                        renderItem={loading ? renderSkeleton : renderProduct}
                        keyExtractor={(item, index) =>
                            loading ? index.toString() : item._id
                        }
                        numColumns={2}
                        contentContainerStyle={{ padding: 15 }}
                    />
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "#d2d2d2ff",
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 8,
        borderRadius: 18,
        padding: 10,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
    },
    price: {
        fontSize: 14,
        color: "#2f7d32",
        fontWeight: "bold",
        marginTop: 4,
    },
    detailsBox: {
        marginTop: 8,
    },
    details: {
        fontSize: 12,
        color: "#555",
        marginBottom: 8,
    },
    cartButton: {
        backgroundColor: "#2f7d32",
        padding: 8,
        borderRadius: 10,
        alignItems: "center",
    },
    searchBox: {
        backgroundColor: "#fff",
        margin: 15,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },

    // ✅ Skeleton styles
    skeletonImage: {
        width: "100%",
        height: 120,
        borderRadius: 12,
    },
    skeletonTitle: {
        marginTop: 10,
        height: 18,
        width: "60%",
        borderRadius: 6,
    },
    skeletonPrice: {
        marginTop: 8,
        height: 14,
        width: "40%",
        borderRadius: 6,
    },
});