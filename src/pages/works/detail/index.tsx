import React from 'react';
import { useParams } from 'react-router';

export default function WorkDetailPage() {
  const { id }: { id: string } = useParams();
  return <div>work - {id}</div>;
}
