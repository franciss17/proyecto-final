import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(initialStateToken);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (token) {
            getUserProfile(token);
        } else {
            setUser(false);
        }
    }, []);

    const getUserProfile = async (accessToken) => {
        try {
            setLoading(true);
            const res = await fetch(import.meta.env.VITE_API_URL + "/auth/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const saveToken = (accessToken) => {
        setToken(accessToken);
        localStorage.setItem("token", accessToken);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;