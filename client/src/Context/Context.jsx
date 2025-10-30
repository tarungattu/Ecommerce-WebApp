import axios from "../axios";
import React, { useState, useEffect, createContext } from "react";

const AppContext = createContext({
  data: [],
  isError: "",
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  refreshData: () => {},
  updateStockQuantity: () => {},
  jwt: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [jwt, setJwt] = useState(localStorage.getItem("jwt") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  // ✅ Attach JWT automatically
  useEffect(() => {
    const interceptor = axios.interceptors.request.use((config) => {
      if (jwt) config.headers.Authorization = `Bearer ${jwt}`;
      return config;
    });
    return () => axios.interceptors.request.eject(interceptor);
  }, [jwt]);

  // ✅ Fetch products only when JWT is available
  const refreshData = async () => {
    try {
      const response = await axios.get("/products");
      console.log("✅ Products fetched:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error.response || error);
      setIsError(error.message);
    }
  };

  useEffect(() => {
    if (!jwt) return; // skip until JWT loaded
    refreshData();
  }, [jwt]);

  // ✅ Persist cart and auth info
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (jwt) localStorage.setItem("jwt", jwt);
    else localStorage.removeItem("jwt");
  }, [jwt]);

  useEffect(() => {
    if (userId) localStorage.setItem("userId", userId);
    else localStorage.removeItem("userId");
  }, [userId]);

  // ✅ Cart functions
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;
    if (existingProductIndex !== -1) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // ✅ Auth handlers
  const login = (token, id) => {
    setJwt(token);
    setUserId(id);
  };

  const logout = () => {
    setJwt(null);
    setUserId(null);
    clearCart();
  };

  return (
    <AppContext.Provider
      value={{
        data,
        isError,
        cart,
        addToCart,
        removeFromCart,
        refreshData,
        clearCart,
        jwt,
        userId,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
