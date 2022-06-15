export default {
  widgets: [
    {
      name: "document-list",
      options: {
        title: "For Review",
        // groq query for all documents that are not published
        query: '*[(_id in path("drafts.**"))]'
      },
      layout: {
        width: "large"
      }
    },
    {
      name: "project-users",
      options: {
        title: "Team Members"
      },
      layout: {
        width: "small"
      }
    }
  ]
};
