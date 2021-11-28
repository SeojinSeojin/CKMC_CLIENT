import React from 'react';
import { useParams } from 'react-router';
import CursorContainer from '../../../components/common/Cursor';
import NavigationBar from '../../../components/common/NavigationBar';

export default function WorkDetailPage() {
  const { id }: { id: string } = useParams();
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />
      <div>work - {id}</div>
    </>
  );
}
