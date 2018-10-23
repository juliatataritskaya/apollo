import {Injectable} from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Post, Query } from './types';

@Injectable()
export class PostService {
  constructor(private apollo: Apollo) { }

  getAllPosts(): Observable<Post[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query blogposts {
          blogposts {
            id
            title
            content
            thumbnail
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.blogposts)
      );
  }

  addNewPost(): Observable<Post> {
    return this.apollo.mutate({
      mutation: gql`
      mutation addBlogpost($post: blogpostInput!) {
          addBlogpost (post: $post){
                  title
                  thumbnail
                  content
          }
       }
    `,
      variables: {
        "post": {
          "title": "hello",
          "thumbnail": "rrrr",
          "content": "sdfghjklfghjkol;"
        }
      }
    }) .subscribe(
      ({ data }) => {
        return data;
      },
      error => {
        console.log('there was an error sending the query', error);
      }
    );
  }

}
