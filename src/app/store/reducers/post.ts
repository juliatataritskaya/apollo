import * as fromActions from '../actions/post';
import {Post} from '../../types';

export interface PostState {
  loaded: boolean;
  loading: boolean;
  data: Post[];
}

export const initialState: PostState = {
  loaded: false,
  loading: false,
  data: [],
};

export function reducer(state: PostState = initialState, action) {
  switch (action.type) {
    case fromActions.LOAD_POSTS_SUCCESS: {
      return action;
    }

    case fromActions.ADD_POST: {
      const data = [...state.data, action.payload];
      return {...state, data};
    }
  }

  return state;
}
