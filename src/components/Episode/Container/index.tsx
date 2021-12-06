import React from 'react';
import { EpisodeData } from '../../../types';
import EpisodeItem from '../Item';

function EpisodeContainer({
  episodes,
  isEditable,
}: {
  episodes: EpisodeData[];
  isEditable: boolean;
}) {
  return (
    <div>
      {episodes.map((episode, index) => (
        <EpisodeItem
          authorName={episode.authorName}
          index={index}
          thumbnail={episode.thumbnail}
          title={episode.title}
          isEditable={isEditable}
        />
      ))}
    </div>
  );
}

export default EpisodeContainer;
