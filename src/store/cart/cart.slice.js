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
  "cart/addProductToCart",
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

export const updateProductToCart = createAsyncThunk(
  "cart/updateProductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart/products`, {
        method: "PUT",
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
            error: "Не обновить товар в корзине",
          });
        }

        throw new Error("Не обновить товар в корзине");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}/api/cart/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          return rejectWithValue({
            status: response.status,
            error: "Не удалось удалить товар из корзины",
          });
        }

        throw new Error("Не удалось удалить товар из корзины");
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
  extraReducers: (builder) => {
    const updateCartTotals = (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => item.price * item.quantity + acc,
        0,
      );
    };

    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingFetch = false;
        state.error = null;
        state.products = action.payload.products;
        state.totalCount = action.payload.totalCount;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addProductToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingAdd = false;
        state.error = null;

        const newProduct = action.payload.product;
        if (newProduct) {
          newProduct.quantity = 1;
          state.products.push(newProduct);
          state.totalCount += 1;
        } else {
          const addedProductId = action.payload.productCart?.productId;
          if (addedProductId) {
            const existingProduct = state.products.find(
              (product) => product.id === addedProductId,
            );

            if (existingProduct) {
              existingProduct.quantity = action.payload.productCart?.quantity;
            }
          }
        }

        updateCartTotals(state);
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      });

    builder
      .addCase(updateProductToCart.pending, (state, action) => {
        state.loadingUpdate = true;
      })
      .addCase(updateProductToCart.fulfilled, (state, action) => {
        state.loadingUpdate = false;
        const addedProductId = action.payload.productCart?.productId;
        if (addedProductId) {
          const existingProduct = state.products.find(
            (product) => product.id === addedProductId,
          );

          if (existingProduct) {
            existingProduct.quantity = action.payload.productCart?.quantity;
          }
        }
        updateCartTotals(state);
      })
      .addCase(updateProductToCart.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.error.message;
      });

    builder
      .addCase(removeProductFromCart.pending, (state, action) => {
        state.loadingRemove = true;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.loadingRemove = false;
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id,
        );
        state.totalCount = action.payload.totalCount;
        updateCartTotals(state);
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.loadingRemove = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
