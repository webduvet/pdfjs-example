import {
  mergeDeepRight
} from 'ramda'

const defaultState = {
  pdfjs: {
    left: null,
    right: null,
  },
  loading: false
}
const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'LOAD_LEFT': {
      return mergeDeppRight(state, {
        pdfjs: {
          left: payload
        }
      });
    }
    case 'LOAD_RIGHT': {
      return mergeDeppRight(state, {
        pdfjs: {
          right: payload
        }
      });
    }
    default: return state;
  }
}

export default reducer;
