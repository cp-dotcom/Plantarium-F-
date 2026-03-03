import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from "react-native";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "expo-router";

function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.navbar}>
            {/* Logo + App Name */}
            <Text style={styles.logo}> PLANTARIUM</Text>

            {/* Profile Section */}
            {!user ? (
                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity
                        style={styles.avatar}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.avatarText}>
                            {user.email.charAt(0).toUpperCase()}
                        </Text>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} transparent animationType="fade">
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalBox}>
                                <Text style={{ marginBottom: 10 }}>
                                    {user.email}
                                </Text>

                                <TouchableOpacity
                                    style={styles.logoutBtn}
                                    onPress={() => {
                                        logout();
                                        setModalVisible(false);
                                        router.replace("/");
                                    }}
                                >
                                    <Text style={{ color: "#fff" }}>Logout</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={{ marginTop: 10 }}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    navbar: {
        // backgroundColor: "1a4104ff",
        padding: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 60,
    },
    logo: {
        color: "#1a4104ff",
        fontWeight: "bold",
        fontSize: 18,
    },
    login: {
        color: "#fff",
        fontWeight: "bold",
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        fontWeight: "bold",
        color: "#2f7d32",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: 250,
        alignItems: "center",
    },
    logoutBtn: {
        backgroundColor: "#2f7d32",
        padding: 8,
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
    },
});
export default Navbar