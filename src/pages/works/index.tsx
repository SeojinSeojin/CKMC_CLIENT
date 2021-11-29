import React from 'react';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import WorkSearchBar from '../../components/Work/SearchBar';

export default function WorksPage() {
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />
      <div>Works</div>
      <WorkSearchBar />
    </>
  );
}
