import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { deleteFetcher, patchFetcher, postFetcher } from '../../../../utils/fetchers';
import { isAllFilled } from '../../../../utils/nullOrEmptyChecker';
import CommentItem from '../Item';

function CommentInput({ authorName, episodeIndex }: { authorName: string; episodeIndex: number }) {
  const [myComments, setMyComments] = useState<CommentData[]>([]);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [mode, setMode] = useState<'modify' | 'create'>('create');
  const [targetID, setTargetID] = useState<string | null>(null);

  useEffect(() => {
    setContent('');
    setMyComments([]);
  }, [authorName, episodeIndex]);
  const findMyComments = async () => {
    const response = await fetch(
      `/api/comment?username=${name}&password=${password}&authorName=${authorName}&episodeIndex=${episodeIndex}`,
    );
    if (response.status === 204) {
      setMyComments([]);
      toast.success('아직 작가님께 보낸 편지가 없어요');
    } else {
      const data = await response.json();
      setMyComments(data);
    }
  };

  const postComment = () => {
    if (!isAllFilled(name, password, content)) {
      toast.error('칸을 모두 채워주세요');
      return;
    }
    const postCommentPromise = new Promise((resolve, reject) => {
      postFetcher('/api/comment', {
        authorName,
        episodeIndex,
        username: name,
        password,
        content,
      }).then((res) => {
        if (res.status === 200) {
          resolve('댓글 추가 성공');
          setContent('');
        } else reject('댓글 추가 실패');
      });
    });
    toast.promise(postCommentPromise, {
      pending: '작가님께 편지를 보내는 중입니다',
      success: '작가님께 편지를 성공적으로 보냈습니다',
      error: '편지 보내기에 실패했습니다. 다시 시도해주세요',
    });
  };

  const patchComment = () => {
    if (!isAllFilled(name, password, content)) {
      toast.error('칸을 모두 채워주세요');
      return;
    }
    const patchCommentPromise = new Promise((resolve, reject) => {
      patchFetcher('/api/comment', {
        username: name,
        password,
        _id: targetID,
        content,
      }).then((res) => {
        if (res.status === 200) {
          resolve('댓글 수정 성공');
          setContent('');
          setMode('create');
          setMyComments([]);
        } else reject('댓글 수정 실패');
      });
    });
    toast.promise(patchCommentPromise, {
      pending: '편지를 고쳐쓰는 중입니다',
      success: '편지를 성공적으로 수정했습니다',
      error: '편지 수정에 실패했습니다. 다시 시도해주세요',
    });
  };

  const deleteComment = (id: string) => {
    const deleteCommentPromise = new Promise((resolve, reject) => {
      deleteFetcher(`/api/comment?username=${name}&password=${password}&_id=${id}`).then((res) => {
        if (res.ok) {
          resolve('댓글 삭제 성공');
          setMyComments([]);
        } else reject('댓글 수정 실패');
      });
    });
    toast.promise(deleteCommentPromise, {
      pending: '편지를 지우는 중입니다',
      success: '편지를 성공적으로 지웠습니다.',
      error: '편지 삭제에 실패했습니다. 다시 시도해주세요.',
    });
  };

  return (
    <div>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          mode === 'modify' ? patchComment() : postComment();
        }}
      >
        <div>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={findMyComments}>내 댓글 찾기</div>
        </div>
        <div>
          <textarea
            placeholder="작성한 댓글은 작성자 본인과 작가에게만 보여집니다"
            maxLength={200}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input type="submit" value={mode === 'modify' ? '수정하기' : '댓글 달기'} />
        </div>
      </FormWrapper>
      <div style={{ marginTop: 50 }}>
        {myComments.map((comment) => (
          <CommentItem
            key={comment._id}
            userName={comment.username}
            content={comment.content}
            createdAt={comment.createdAt}
            isEditable={true}
            handleEdit={() => {
              setMode('modify');
              setContent(comment.content);
              setTargetID(comment._id);
            }}
            handleDelete={() => {
              deleteComment(comment._id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const FormWrapper = styled.form`
  padding: 20px;
  border: 1px solid #2454a6;
  margin-top: 60px;

  & input[type='text'],
  input[type='password'],
  textarea {
    width: 180px;
    border: none;
    margin-right: 16px;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #8eaec9;
    }
  }

  & input[type='submit'] {
    border: none;
    background-color: transparent;
    text-align: right;
    font-size: 18px;
    cursor: pointer;
  }

  & input {
    &:first-child {
      border-right: 1px solid #8eaec9;
    }
  }
  & textarea {
    width: 100%;
    height: 52px;
    resize: none;
  }
  & > div:nth-child(1) {
    display: flex;
    & > div {
      margin-left: auto;
      cursor: pointer;
    }
  }
  & > div:nth-child(2) {
    margin-top: 20px;
    display: grid;
    align-items: end;
    grid-template-columns: auto 74px;
  }
`;

export default CommentInput;
