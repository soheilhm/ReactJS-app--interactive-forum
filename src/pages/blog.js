import React from 'react';
import CommentBox from '../components/comment-box';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">It is easy to despise what you cannot have..</h1>
            <div className="article-body">
              <p>
                One afternoon, a fox was walking through the forest and spotted a bunch of grapes
                hanging from a lofty branch. "Just the thing to quench my thirst," said the fox.
              </p>
              <blockquote>
                Taking a few steps back, the fox jumped and just missed the hanging grapes. Again,
                the fox took a few paces back and tried to reach them, but still failed.
              </blockquote>
              <p>
                Finally, giving up, the fox turned up his nose and said, "They're probably sour anyway."
                Then he walked away.
              </p>
            </div>
          </article>
        </div>

        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
