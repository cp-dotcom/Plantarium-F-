import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Buynow() {
    const { name, price, details, image } = useLocalSearchParams();
    const router = useRouter();

    const handlePayment = () => {
        // Navigate to home page "/"
        router.push("/payment");
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.details}>{details}</Text>

            {/* Payment Button */}
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    price: {
        fontSize: 20,
        color: "#2f7d32",
        fontWeight: "bold",
        marginVertical: 10,
    },
    details: {
        fontSize: 16,
        color: "#555",
    },
    button: {
        backgroundColor: "#2f7d32",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});