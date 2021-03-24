// main.js

// Actions
const LOAD   = "main/LOAD";
const CREATE = "main/CREATE";
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
    list: ["코딩 공부", "영화 보기", "책 읽기"]
};

// Action Creators
export const loadMain = (main) => {
    return {type: LOAD, main};
}

export const createMain = (main) => {
    return {type: CREATE, main};
}
  

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "main/LOAD": {
        return state;
    }

    case "main/CREATE":{
        const new_main_list = [...state.list, action.main];
        return {list: new_main_list};
        break;
    }
    default: return state;
  }
}

