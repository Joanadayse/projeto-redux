import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    id: 1,
    name: "Joana dayse",
    email: "daysejoana7@gmail.com",
    address: null,
  },
};

export const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})

export default userSlice.reducer;