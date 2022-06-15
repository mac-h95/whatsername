const link = {
  name: "link",
  title: "Link",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "string"
    }
  ]
};

const cta = {
  name: "cta",
  title: "Call to Action",
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
    },
    {
      name: "subheading2",
      title: "Subheading Two",
      type: "string"
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string"
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "reference",
      to: [{ type: "link" }]
    }
  ]
};

const keyword = {
  name: "keyword",
  title: "Keyword",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    }
  ]
};

export { link, cta, keyword };
