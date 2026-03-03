// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     SafeAreaView,
// } from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
// import { useAuth } from "../context/AuthContext";
// import { Ionicons } from "@expo/vector-icons";

// import * as Google from "expo-auth-session/providers/google";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [secure, setSecure] = useState(true);

//     const { login } = useAuth();
//     const router = useRouter();

//     const handleLogin = async () => {
//         if (!email || !password) {
//             alert("Please enter email and password");
//             return;
//         }

//         const success = await login(email, password);

//         if (success) {
//             router.replace("/");
//         } else {
//             alert("Invalid email or password");
//         }
//     };


//     const [request, response, promptAsync] = Google.useAuthRequest({
//         expoClientId: "777422712433-6g1qvpq1st60le51vcgueviplk943a0v.apps.googleusercontent.com",
//     });

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.card}>
//                 <Text style={styles.title}>Login to your account</Text>
//                 <Text style={styles.subtitle}>
//                     Don't have an account?{" "}
//                     <TouchableOpacity onPress={() => router.push("/signup")}>
//                         <Text style={styles.link}>Sign up</Text>
//                     </TouchableOpacity>
//                 </Text>

//                 {/* Email */}
//                 <Text style={styles.label}>Email</Text>
//                 <TextInput
//                     placeholder="abc@gmail.com"
//                     placeholderTextColor="#777"
//                     style={styles.input}
//                     value={email}
//                     onChangeText={setEmail}
//                 />

//                 {/* Password */}
//                 <Text style={styles.label}>Password</Text>
//                 <View style={styles.passwordBox}>
//                     <TextInput
//                         placeholder="Enter password"
//                         placeholderTextColor="#777"
//                         style={{ flex: 1, color: "#fff" }}
//                         secureTextEntry={secure}
//                         value={password}
//                         onChangeText={setPassword}
//                     />
//                     <TouchableOpacity onPress={() => setSecure(!secure)}>
//                         <Ionicons
//                             name={secure ? "eye-off-outline" : "eye-outline"}
//                             size={20}
//                             color="#777"
//                         />
//                     </TouchableOpacity>
//                 </View>

//                 {/* Remember / Forgot */}
//                 <View style={styles.row}>
//                     <Text style={styles.remember}>Remember me</Text>
//                     <Text style={styles.forgot}>Forgot Password?</Text>
//                 </View>

//                 {/* Login Button */}
//                 <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
//                     <Text style={styles.loginText}>Login</Text>
//                 </TouchableOpacity>

//                 {/* Divider */}
//                 <View style={styles.dividerRow}>
//                     <View style={styles.line} />
//                     <Text style={styles.or}>OR CONTINUE WITH</Text>
//                     <View style={styles.line} />
//                 </View>

//                 {/* Social Icons */}
//                 <View style={styles.socialRow}>
//                     <View style={styles.socialBtn}>
//                         <Ionicons name="logo-google" size={20} color="#fff" />
//                     </View>
//                     <View style={styles.socialBtn}>
//                         <Ionicons name="logo-twitter" size={20} color="#fff" />
//                     </View>
//                     <View style={styles.socialBtn}>
//                         <Ionicons name="logo-github" size={20} color="#fff" />
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#0d0d0d",
//         justifyContent: "center",
//         padding: 20,
//     },
//     card: {
//         backgroundColor: "#111",
//         padding: 20,
//         borderRadius: 15,
//         borderWidth: 1,
//         borderColor: "#222",
//     },
//     title: {
//         color: "#fff",
//         fontSize: 22,
//         fontWeight: "bold",
//     },
//     subtitle: {
//         color: "#aaa",
//         marginBottom: 20,
//     },
//     link: {
//         color: "#2f7d32",
//     },
//     label: {
//         color: "#aaa",
//         marginBottom: 5,
//         marginTop: 10,
//     },
//     input: {
//         backgroundColor: "#1a1a1a",
//         color: "#fff",
//         padding: 12,
//         borderRadius: 8,
//     },
//     passwordBox: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "#1a1a1a",
//         borderRadius: 8,
//         paddingHorizontal: 12,
//     },
//     row: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginVertical: 15,
//     },
//     remember: {
//         color: "#aaa",
//     },
//     forgot: {
//         color: "#2f7d32",
//     },
//     loginBtn: {
//         backgroundColor: "#2f7d32",
//         padding: 15,
//         borderRadius: 8,
//         alignItems: "center",
//     },
//     loginText: {
//         color: "#fff",
//         fontWeight: "bold",
//     },
//     dividerRow: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginVertical: 20,
//     },
//     line: {
//         flex: 1,
//         height: 1,
//         backgroundColor: "#333",
//     },
//     or: {
//         color: "#777",
//         marginHorizontal: 10,
//         fontSize: 12,
//     },
//     socialRow: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//     },
//     socialBtn: {
//         backgroundColor: "#1a1a1a",
//         padding: 15,
//         borderRadius: 10,
//         width: 60,
//         alignItems: "center",
//     },
// });





// //web    777422712433-6g1qvpq1st60le51vcgueviplk943a0v.apps.googleusercontent.com




import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);

    const { login } = useAuth();
    const router = useRouter();

    // 🔥 Google Auth Config
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: "777422712433-6g1qvpq1st60le51vcgueviplk943a0v.apps.googleusercontent.com",
        androidClientId: "777422712433-cep3a9seituk9ijrbbdqts6k4gt12p8b.apps.googleusercontent.com",
        expoClientId: "777422712433-6g1qvpq1st60le51vcgueviplk943a0v.apps.googleusercontent.com",
    });

    // 🔥 Handle Google Response + Fetch User Info
    useEffect(() => {
        if (response?.type === "success") {
            const { authentication } = response;

            fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                headers: {
                    Authorization: `Bearer ${authentication.accessToken}`,
                },
            })
                .then(res => res.json())
                .then(user => {
                    console.log("Google User Info:", user);

                    // After successful login redirect
                    router.replace("/");
                })
                .catch(error => {
                    console.log("Google User Fetch Error:", error);
                });
        }
    }, [response]);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const success = await login(email, password);

        if (success) {
            router.replace("/");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login to your account</Text>

                <Text style={styles.subtitle}>
                    Don't have an account?{" "}
                    <TouchableOpacity onPress={() => router.push("/signup")}>
                        <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                </Text>

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

                <View style={styles.row}>
                    <Text style={styles.remember}>Remember me</Text>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>

                {/* Normal Login */}
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerRow}>
                    <View style={styles.line} />
                    <Text style={styles.or}>OR CONTINUE WITH</Text>
                    <View style={styles.line} />
                </View>

                {/* Social Login */}
                <View style={styles.socialRow}>
                    {/* Google Button */}
                    <TouchableOpacity
                        style={styles.socialBtn}
                        onPress={() => promptAsync()}
                        disabled={!request}
                    >
                        <Ionicons name="logo-google" size={20} color="#fff" />
                    </TouchableOpacity>

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
    },
    link: {
        color: "#2f7d32",
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    remember: {
        color: "#aaa",
    },
    forgot: {
        color: "#2f7d32",
    },
    loginBtn: {
        backgroundColor: "#2f7d32",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    loginText: {
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