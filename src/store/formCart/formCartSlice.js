import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
};

export const submitCartFrom = createAsyncThunk(
  "formCart/submitCartForm",
  async (formData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return rejectWithValue({
          status: response.status,
          error: "Не удалось создать заказ",
        });
      }

      throw new Error("Не удалось создать заказ");
    }

    const responseData = await response.json();
    return responseData.orderId;
  },
);

const formCartSlice = createSlice({
  name: "formCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitCartFrom.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitCartFrom.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.orderId = action.payload;
      })
      .addCase(submitCartFrom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default formCartSlice.reducer;
