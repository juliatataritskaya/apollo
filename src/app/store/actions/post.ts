import { Action } from '@ngrx/store';
import { Post } from '../../types';
import {Injectable} from '@angular/core';

export const LOAD_POST = '[Post] Load Post';
export const ADD_POST = '[Post] Add Post';
export const LOAD_POSTS_SUCCESS = '[Post] Load Post Success';
export const ADD_POST_SUCCESS = '[Post] Add Post Success';
export const ADD_POST_FAIL = '[Post] Add Post Fail';

export class LoadPost implements Action {
  readonly type = LOAD_POST;
  constructor() {}
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class AddPost implements Action {
  readonly type = ADD_POST;
  constructor(public payload: Post) {}
}

export type PostActions = LoadPost | AddPost | LoadPostsSuccess;
