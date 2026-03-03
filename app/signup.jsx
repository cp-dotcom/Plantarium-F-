import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);

    const { signup } = useAuth();
    const router = useRouter();

    const handleSignup = async () => {
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        const success = await signup(name, email, password);

        if (success) {
            alert("Account created! Please login.");
            router.replace("/login");
        } else {
            alert("Signup failed. Try again.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Create your account</Text>
                <Text style={styles.subtitle}>
                    Already have an account?{" "}
                    <TouchableOpacity onPress={() => router.push("/login")}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </Text>

                {/* Name */}
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    placeholder="John Doe"
                    placeholderTextColor="#777"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />

                {/* Email */}
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="abc@gmail.com"
                    placeholderTextColor="#777"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password */}
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordBox}>
                    <TextInput
                        placeholder="Enter password"
                        placeholderTextColor="#777"
                        style={{ flex: 1, color: "#fff" }}
                        secureTextEntry={secure}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecure(!secure)}>
                        <Ionicons
                            name={secure ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color="#777"
                        />
                    </TouchableOpacity>
                </View>

                {/* Signup Button */}
                <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerRow}>
                    <View style={styles.line} />
                    <Text style={styles.or}>OR CONTINUE WITH</Text>
                    <View style={styles.line} />
                </View>

                {/* Social Icons */}
                <View style={styles.socialRow}>
                    <View style={styles.socialBtn}>
                        <Ionicons name="logo-google" size={20} color="#fff" />
                    </View>
                    <View style={styles.socialBtn}>
                        <Ionicons name="logo-twitter" size={20} color="#fff" />
                    </View>
                    <View style={styles.socialBtn}>
                        <Ionicons name="logo-github" size={20} color="#fff" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d",
        justifyContent: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "#111",
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#222",
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#aaa",
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    link: {
        color: "#2f7d32",
        fontWeight: "bold",
    },
    label: {
        color: "#aaa",
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: 12,
        borderRadius: 8,
    },
    passwordBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    signupBtn: {
        backgroundColor: "#2f7d32",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    signupText: {
        color: "#fff",
        fontWeight: "bold",
    },
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#333",
    },
    or: {
        color: "#777",
        marginHorizontal: 10,
        fontSize: 12,
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    socialBtn: {
        backgroundColor: "#1a1a1a",
        padding: 15,
        borderRadius: 10,
        width: 60,
        alignItems: "center",
    },
});
