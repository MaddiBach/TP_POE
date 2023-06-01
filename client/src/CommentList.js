import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "Ce commentaire est en attente de modération";
    }

    if (comment.status === "rejected") {
      content = "Ce commentaire a été rejeté";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
