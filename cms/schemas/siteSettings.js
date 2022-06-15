export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
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
        "The image that will display when someone shares your site on social media."
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "The small icon that appears in the browser tab."
    },
    {
      name: "themeColor",
      title: "Theme Color",
      type: "colorPicker",
      description: "The color used in the browser ui on mobile devices."
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string"
            },
            {
              name: "url",
              title: "URL",
              type: "url"
            },
            {
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                outputFormat: "react",
                providers: ["fa", "mdi", "hi", "fi"]
              },
              preview: {
                select: {
                  provider: "icon.provider",
                  name: "icon.name"
                },
                prepare(icon) {
                  return {
                    title: icon.provider,
                    subtitle: icon.name,
                    media: preview(icon)
                  };
                }
              }
            }
          ]
        }
      ]
    }
  ]
};
