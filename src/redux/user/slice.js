import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  user:null,
  users:[],
  loading:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },

    logoutUser: (state, action) => {
      return {
        ...state,
        user: null,
      };
    },
    addAddress: (state, action) => {
      if (action.payload.location === "" || action.payload.number === "") {
        alert("PREENCHA TODOS OS CAMPOS");
        return { ...state };
      }

      if (state.user === null) {
        alert("FAÇA UM LOGIN PARA CADASTRAR");

        return { ...state };
      }

      alert("DADOS ATUALIZADOS ! ");

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },

    deleteAddress: (state, action) => {
        return{
            ...state,
            user:{
                ...state.user,
                address:null,
            }
        }
    },

    

    fetchUser:(state)=>{{
      state.loading=true;
    }},

    fetchUserSucess:(state,action)=>{
      state.users=action.payload;
      state.loading=false;

    },

    fectchUserFail:(state,action)=>{
      console.log(action.payload);
        state.loading = false;
    }
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  deleteAddress,
  fetchUser,
  fetchUserSucess,
  fectchUserFail,
} = userSlice.actions;
 
export default userSlice.reducer;