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
      {episodes
        .sort((a, b) => a.index - b.index)
        .map((episode) => (
          <EpisodeItem
            key={episode.index}
            authorName={episode.authorName}
            index={episode.index}
            thumbnail={episode.thumbnail.remotePath}
            title={episode.title}
            isEditable={isEditable}
            link={episode.link}
            viewMethod={episode.viewMethod}
          />
        ))}
    </div>
  );
}

export default EpisodeContainer;
