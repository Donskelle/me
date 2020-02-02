/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendMail = `mutation SendMail($name: String!, $email: String!, $message: String!) {
  sendMail(name: $name, email: $email, message: $message)
}
`
export const createTrack = `mutation CreateTrack($input: CreateTrackInput!) {
  createTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    title
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
    }
    publishedAt
    description
    channelTitle
  }
}
`
export const updateTrack = `mutation UpdateTrack($input: UpdateTrackInput!) {
  updateTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    title
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
    }
    publishedAt
    description
    channelTitle
  }
}
`
export const deleteTrack = `mutation DeleteTrack($input: DeleteTrackInput!) {
  deleteTrack(input: $input) {
    id
    addedBy
    createdAt
    youtubeId
    title
    thumbnails {
      default {
        url
        width
        height
      }
      medium {
        url
        width
        height
      }
      high {
        url
        width
        height
      }
    }
    publishedAt
    description
    channelTitle
  }
}
`
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    id
    startTime
    status
    currentTrack {
      id
      addedBy
      createdAt
      youtubeId
      title
      publishedAt
      description
      channelTitle
    }
  }
}
`
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
    id
    startTime
    status
    currentTrack {
      id
      addedBy
      createdAt
      youtubeId
      title
      publishedAt
      description
      channelTitle
    }
  }
}
`
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
    id
    startTime
    status
    currentTrack {
      id
      addedBy
      createdAt
      youtubeId
      title
      publishedAt
      description
      channelTitle
    }
  }
}
`
