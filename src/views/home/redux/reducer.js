const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '지민',
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [
      { src: 'https://images.unsplash.com/photo-1507667895043-c4de59dda180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' },
      { src: 'https://images.unsplash.com/photo-1528661894674-fbd89cd5bf2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' },
      { src: 'https://images.unsplash.com/photo-1593870224218-eba0942d48a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80' },
    ],
    Comments: [
      {
        User: {
          nickname: '영로',
        },
        content: '뭐하고있어?',
      },
      {
        User: {
          nickname: '수호',
        },
        content: '코딩하지!',
      },
    ],
  }],
  imagePath: [], // 이미지 경로
  postAdded: false, // 업로드 완료되면 true 로 바뀜
};

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다~',
  User: {
    id: 1,
    nickname: '제로',
  },
  Images: [],
  Comments: [],
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST, // 게시글 작성하는 action
};
// 우리가 동적으로 데이터를 바꿔줄 것이 아니라면 action creator 함수쓰는 것이 아니다.

export const Action = {
  Types: {
    LOG_IN_REQUEST: 'LOG_IN_REQUEST',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
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
  case ADD_POST: {
    return {
      ...state,
      mainPosts: [dummyPost, ...state.mainPosts],
      postAdded: true,
      // 앞에 써줘야 새로운 게시글이 제일 위로 올라감
      // 게시글 작성완료하면 postAdded 의 상태를 true 로 만들어야 하기 때문에 이렇게 한다.
    };
  }
  }
};

export default reducer;
