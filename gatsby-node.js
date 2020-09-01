const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

// Extend Github Repository Resolver.
// Creates Local of Profile Pics to optimze via gatsby image
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