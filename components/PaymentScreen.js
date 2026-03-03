import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
import { useRouter } from "expo-router";

const PaymentScreen = () => {
    const router = useRouter();

    const handlePayment = async () => {
        try {
            if (Platform.OS === 'web') {
                Alert.alert("Web Not Supported", "Razorpay native SDK only works on Android/iOS. Use Razorpay Checkout.js for Web.");
                return;
            }

            if (!RazorpayCheckout) {
                Alert.alert("Error", "Razorpay native module not found. Are you using a Development Build (not Expo Go)?");
                return;
            }

            const response = await fetch(
                "http://172.16.1.15:5000/api/payment/create-order",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount: 500 }),
                }
            );

            const order = await response.json();

            const options = {
                key: "rzp_test_SLWIstj2mGg9Vc",
                amount: order.amount,
                currency: "INR",
                name: "Plantarium",
                order_id: order.id,
                description: "Test Payment",
                prefill: {
                    email: "test@gmail.com",
                    contact: "9999999999",
                    name: "Vishnu",
                },
                theme: { color: "#3399cc" },
            };

            RazorpayCheckout.open(options)
                .then(async (data) => {
                    console.log("Razorpay Response Data:", data);

                    // 3️⃣ Verify Payment
                    const verifyResponse = await fetch(
                        "http://172.16.1.15:5000/api/payment/verify-payment",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: data.razorpay_order_id,
                                razorpay_payment_id: data.razorpay_payment_id,
                                razorpay_signature: data.razorpay_signature,
                                amount: 500,
                            }),
                        }
                    );

                    const verifyData = await verifyResponse.json();
                    console.log("Verification Response:", verifyData);

                    if (verifyData.success) {
                        Alert.alert("Success", "Order Placed Successfully!", [
                            { text: "OK", onPress: () => router.replace("/(tabs)/products") }
                        ]);
                    } else {
                        Alert.alert("Error", "Payment Verification Failed: " + (verifyData.error || "Unknown error"));
                    }
                })
                .catch((error) => {
                    console.log("Razorpay Error:", error);
                    Alert.alert("Error", JSON.stringify(error));
                });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test Payment</Text>

            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Pay ₹500</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#3399cc",
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});