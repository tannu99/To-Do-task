import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import {navigate} from '../../navigation/RouterServices';

const initialState = {
  loading: false,
  userData: {},
  is_logged: false,
  list: [],
  users: [
    {
      firstName: 'Tom',
      lastName: 'Cruise',
      email: 'tom@gmail.com',
      mobile: '987656456',
      password:'1234'
    },
    {
      firstName: 'Maria',
      lastName: 'Sharapova',
      email: 'maria@gmail.com',
      mobile: '8765456787',
      password:'1234'
    },
    {
      firstName: 'James',
      lastName: 'Bond',
      email: 'james@gmail.com',
      mobile: '8765456734',
      password:'1234'
    },
  ],
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const isFound = state.users.some((element) => {
        if (element.mobile === action.payload.mobile) {
          return true;
        }

        return false;
      });

      if (isFound) {
        Toast.show('User Already Exists', Toast.SHORT, ['UIAlertController']);
      } else {
        state.users = [
          ...state.users,
          {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            mobile: action.payload.mobile,
            password:action.payload.password
          },
        ];
        navigate('Login');
      }
    },
    userProfile: (state, action) => {
      console.log(action, 'lllllll');
      state.userData = action.payload;
      state.is_logged = true;
    },
    handleAddTask: (state, action) => {
      state.list = [...state.list, action.payload];
    },

    completeTask: (state, action) => {
      let itemsCopy = [...state.list];
      itemsCopy.splice(action.payload, 1);
      state.list = itemsCopy;
    },
    logout: (state, action) => {
      state.is_logged = false;
      navigate('Login');
      state.list = [];
    },
  },
  extraReducers: (builder) => {},
});

export const loginDataSelectors = {
  getData: (state) => state.loginData,
};

// export const { userLogin } = loginSlice.actions

export const loginReducer = loginSlice.reducer;
export const {addUser, userProfile, handleAddTask, completeTask, logout} =
  loginSlice.actions;
