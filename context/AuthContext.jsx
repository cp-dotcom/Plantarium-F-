import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Backend URL - Replace with your machine's IP address for physical device testing
    const API_URL = "http://172.16.1.15:5000/api/auth";

    useEffect(() => {
        // Load user from storage on mount
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.log("Failed to load user", error);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password });

            // Save token and user
            if (res.data.token) {
                await AsyncStorage.setItem("token", res.data.token);
                await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
                setUser(res.data.user);
                return true;
            }
            return false;
        } catch (error) {
            console.log("Login Error:", error.response?.data || error.message);
            return false;
        }
    };

    const signup = async (name, email, password) => {
        try {
            const res = await axios.post(`${API_URL}/signup`, { name, email, password });
            if (res.status === 201) return true;
            return false;
        } catch (error) {
            console.log("Signup Error:", error.response?.data || error.message);
            return false;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            setUser(null);
        } catch (error) {
            console.log("Logout Error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);