const crypto = require(`crypto`)

const digest = data => {
  return crypto.createHash(`md5`).update(JSON.stringify(data)).digest(`hex`)
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNode } = actions
  if (node.internal.type === "StrapiBlogArticle") {
    createNode({
      ...node,
      id: node.id + "-markdown",
      parent: node.id,
      children: [],
      internal: {
        type: "Article",
        mediaType: "text/markdown",
        content: node.content,
        contentDigest: digest(node),
      },
    })
  }
}
