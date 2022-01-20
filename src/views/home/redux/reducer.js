const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
};

export const Action = {
  Types: {
    LOG_IN_REQUEST: 'LOG_IN_REQUEST',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    LOG_IN_FAILURE: 'LOG_IN_FAILURE',
  },

  Creators: {
    loginRequest: (data) => ({
      type: Action.Types.LOG_IN_REQUEST,
      data,
    }),
    loginSuccess: (data) => ({
      type: Action.Types.LOG_IN_SUCCESS,
      data,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: return state;
  }
};

export default reducer;
