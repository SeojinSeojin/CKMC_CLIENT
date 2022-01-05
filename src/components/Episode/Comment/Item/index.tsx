import React from 'react';
import styled from 'styled-components';
import { parseDate } from '../../../../utils/parseDate';

const Wrapper = styled.div`
  border-top: 1px solid #8eaec9;
  padding-top: 10px;
  padding-bottom: 34px;

  &:last-child {
    border-bottom: 1px solid #8eaec9;
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    & > div {
      display: flex;
      gap: 20px;
      align-items: flex-end;
    }
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-size: 16px;
      }
      & > div:nth-child(2) {
        font-size: 12px;
        color: #8eaec9;
      }
    }
    & > div:nth-child(2) {
      font-size: 18px;
    }
  }
  padding-left: 20px;
  padding-right: 20px;
`;

function CommentItem({
  userName,
  content,
  createdAt,
  isEditable,
}: {
  userName: string;
  content: string;
  createdAt: string;
  isEditable: boolean;
}) {
  return (
    <Wrapper>
      <div>
        <div>
          <div>{userName}</div>
          <div>{parseDate(createdAt)}</div>
        </div>
        {isEditable && (
          <div>
            <div>수정</div>
            <div>삭제</div>
          </div>
        )}
      </div>
      <div>{content}</div>
    </Wrapper>
  );
}

export default CommentItem;
