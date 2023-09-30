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

        if (!user) {
            const saveuser = localStorage.getItem("user")
            if (saveuser) {
                setUser(saveuser)
            }

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

    const saveUser = (user) => {
        setUser(user);
        localStorage.setItem("user", user);
    };


    const saveToken = (accessToken) => {
        setToken(accessToken);
        localStorage.setItem("token", accessToken);
    };
    
    const logout = () => {
        setToken(null);
        setUser(false);
        //localStorage.removeItem("token");
        localStorage.removeItem("user");

    };

    return (
        <AuthContext.Provider value={{saveUser, saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;