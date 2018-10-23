import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../types';
import { PostService } from '../post.service';

import * as PostActions from './../store/actions/post';
import { Store } from '@ngrx/store';
// import { State } from '../store/reducers/post';
import {AppState} from '../app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  posts:  Observable<Post[]>;

  constructor(private postService: PostService, private store: Store<AppState>) {}
  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

  newPost() {
    this.postService.addNewPost();
    // this.store.dispatch(new PostActions.AddPost({
    //   id: 10,
    //   title: 'hello',
    //   thumbnail: 'rrrr',
    //   content: 'sdfghjklfghjkol;'
    // }));
  }
}
