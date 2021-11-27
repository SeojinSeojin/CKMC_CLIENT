import React from 'react';
import { useParams } from 'react-router';

export default function AuthorPage() {
  const { id }: { id: string } = useParams();

  return <div>author - {id}</div>;
}
