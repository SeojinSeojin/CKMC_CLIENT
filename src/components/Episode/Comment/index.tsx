import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useUser } from '../../../hooks/useUser';
import CommentInput from './Input';
import CommentItem from './Item';

function EpisodeComment({
  authorName,
  episodeIndex,
}: {
  authorName: string;
  episodeIndex: number;
}) {
  const { author } = useUser();
  const [isVisitor, setIsVisitor] = useState(true);
  const [comments, setComments] = useState<CommentData[]>([]);

  const getCommentsByEpisode = async () => {
    const response = await fetch(
      `/api/comment/episode?authorName=${authorName}&episodeIndex=${episodeIndex}`,
    );
    if (!response.ok) return;

    const data = await response.json();
    console.log(data);
    setComments(data);
    setIsVisitor(false);
  };
  useEffect(() => {
    if (author) getCommentsByEpisode();
  }, [author, episodeIndex, authorName]);

  return (
    <>
      {isVisitor ? (
        <CommentInput />
      ) : (
        <div style={{ marginTop: 72 }}>
          {comments.length ? (
            comments.map((comment) => (
              <CommentItem
                userName={comment.username}
                content={comment.content}
                createdAt={comment.createdAt}
                isEditable={false}
              />
            ))
          ) : (
            <div style={{ paddingLeft: 8 }}>아직 도착한 편지가 없어요</div>
          )}
        </div>
      )}
    </>
  );
}

export default EpisodeComment;
