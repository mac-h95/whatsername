
const album = {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      slugify: (input) => input.toLowerCase().replace(/\s+/g, "-")
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "description",
          title: "Description",
          type: "text"
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "reference", to: [{ type: "keyword" }] }]
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          description:
            "Thumbnail image for social media, might be a good idea to create a fun image with the artist and venue name on it or something."
        }
      ]
    },
    {
      name: "cover",
      title: "Cover",
      type: "image"
    },
    {
      name: "artist",
      title: "Artist",
      type: "string"
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: [{ type: "venue" }]
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "photo"
        }
      ]
    }
  ]
};

const photographer = {
  name: "photographer",
  title: "Photographer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    }
  ]
};

const photo = {
  name: "photo",
  title: "Photograph",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "caption",
      title: "Caption",
      type: "string"
    },
    {
      name: "photographer",
      title: "Photographer",
      type: "reference",
      to: [{ type: "photographer" }]
    }
  ]
};

export { album, photo, photographer };
