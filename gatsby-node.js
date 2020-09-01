const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

// Extend Github Repository Resolver.
// Creates Local File of Profile Pics to optimze via gatsby image
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  await createResolvers({
    Github_Repository: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          const { avatarUrl } = source.owner;

          // eslint-disable-next-line no-return-await
          return createRemoteFileNode({
            url: encodeURI(avatarUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};