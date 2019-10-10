const axios = require('axios')

exports.handler = (event, context, callback) => {
  const searchString = event.arguments ? event.arguments.search : 'Captial Bra'
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchString,
      )}&key=${process.env.YOUTUBE_APIKEY}`,
    )
    .then(response => {
      const videos = response.data.items
        .filter(
          ({ snippet, id }) =>
            snippet &&
            id &&
            id.videoId &&
            snippet.channelTitle &&
            snippet.title,
        )
        .map(({ snippet, id }) => ({
          youtubeId: id.videoId,
          channelTitle: snippet.channelTitle,
          title: snippet.title,
          publishedAt: snippet.publishedAt,
          description: snippet.description,
          thumbnails: snippet.thumbnails,
        }))

      context.done(null, videos)
    })
    .catch(e => {
      callback(e)
    })
}
