import React from 'react';
import { SquareItem } from './style';

interface IGuestItem extends LetterData {
  index: number;
}

function GuestItemSquare({ title, body, sender, file, createdAt, index }: IGuestItem) {
  return <SquareItem></SquareItem>;
}

export default GuestItemSquare;
