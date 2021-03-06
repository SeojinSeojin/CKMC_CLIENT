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
  & > div:nth-child(2) {
    line-height: 24px;
  }
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 680px) {
    padding-left: 12px;
    padding-right: 12px;
    & > div:nth-child(1) {
      margin-bottom: 14px;
      & > div {
        gap: 12px;
      }
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          font-size: 12px;
        }
        & > div:nth-child(2) {
          font-size: 10px;
          color: #8eaec9;
        }
      }
      & > div:nth-child(2) {
        font-size: 12px;
      }
    }
    & > div:nth-child(2) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

function CommentItem({
  userName,
  content,
  createdAt,
  isEditable,
  handleEdit,
  handleDelete,
}: {
  userName: string;
  content: string;
  createdAt: string;
  isEditable: boolean;
  handleEdit?: () => void;
  handleDelete?: () => void;
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
            <div onClick={handleEdit && handleEdit}>수정</div>
            <div onClick={handleDelete && handleDelete}>삭제</div>
          </div>
        )}
      </div>
      <div>{content}</div>
    </Wrapper>
  );
}

export default CommentItem;
