const axios = require('axios')

exports.handler = (event, context) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${'test'}&key=${
        process.env.YOUTUBE_APIKEY
      }`,
    )
    .then(response => {
      const videos = response.data.items.map(({snippet, id}) => ({
        youtubeId: id.videoId,
        channelTitle: snippet.channelTitle,
        title: snippet.title,
        publishedAt: snippet.publishedAt,
        description: snippet.description,
      }))

      context.done(null, videos)
    })
    .catch(e => {
      console.log(e)
      // handle error
      context.done(null, [])
    })
}
