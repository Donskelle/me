import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';

import { getPlayer } from '../../graphql/queries';
import { onUpdatePlayer as onUpdatePlayerSubsription } from '../../graphql/subscriptions';

export function usePlayer() {
  const [playerStatus, setPlayerStatus] = useState({
    playing: false,
    startTime: null,
    currentTrack: null,
  });

  useEffect(() => {
    API.graphql(
      graphqlOperation(getPlayer, {
        id: 'dc3c047f-f0b0-4108-9632-f029440b14b6',
      }),
    ).then((playerData) => {
      setPlayerStatus({ ...playerData.data.getPlayer, playing: false });
    });
  }, []);

  useEffect(() => {
    const subscriber = API.graphql(
      graphqlOperation(onUpdatePlayerSubsription),
    ).subscribe({
      next: (data) => {
        const {
          value: {
            data: { onUpdatePlayer },
          },
        } = data;
        setPlayerStatus({ ...onUpdatePlayer, playing: true });
      },
    });
    return () => subscriber.unsubscribe();
  }, []);

  return playerStatus;
}
