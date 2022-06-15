const homePage = {
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    }
  ]
};

const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    }
  ]
};

const eventsPage = {
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string"
    }
  ]
};

const mediaPage = {
  name: "mediaPage",
  title: "Media Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    }
  ]
};

const blogPage = {
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    }
  ]
};

const shopPage = {
  name: "shopPage",
  title: "Shop Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    }
  ]
};

const contactPage = {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string"
    }
  ]
};

export {
  homePage,
  aboutPage,
  eventsPage,
  mediaPage,
  blogPage,
  shopPage,
  contactPage
};
