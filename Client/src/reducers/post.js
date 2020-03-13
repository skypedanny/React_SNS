export const initialState = {
  mainPosts: [{
      User: {
        id: 1,
        nickname: "danny"
      },
      content: "I love you babe",
      img: "https://pbs.twimg.com/media/DvbOFSDUUAEj0RU.jpg"
    }],
    imagePaths: [],
};

export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

const addPost = {
  type: ADD_POST
};

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "I love you",
    UserId: 1,
    User: {
      nickname: "daehun"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [actions.data, ...state.mainPosts]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
