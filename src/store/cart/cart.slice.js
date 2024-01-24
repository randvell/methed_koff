import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          return rejectWithValue({
            status: response.status,
            error: "Не удалось загрузить содержимое корзины",
          });
        }

        throw new Error("Не удалось загрузить содержимое корзины");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addProductToCart = createAsyncThunk(
  "cart/fetchCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        if (response.status === 401) {
          return rejectWithValue({
            status: response.status,
            error: "Не удалось добавить товар в корзину",
          });
        }

        throw new Error("Не удалось добавить товар в корзину");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeProductFromCart = createAsyncThunk(
  "cart/fetchCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(
        `${API_URL}/api/cart/products/${productData.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        if (response.status === 401) {
          return rejectWithValue({
            status: response.status,
            error: "Не удалось получить каталог!",
          });
        }

        throw new Error("Не удалось загрузить содержимое корзины");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartSlice.reducer;
