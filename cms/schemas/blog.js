export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'snippet',
      title: 'Snippet',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(110)
          .error('Please enter a snippet less than 110 characters')
    },
    {
      name: 'metadata',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'string'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'keyword' }] }]
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          description:
            'Thumbnail image for social media, might be a good idea to create a fun image with the post title on it or something.'
        }
      ]
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [
        {
          type: 'member'
        }
      ]
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      validation: (Rule) =>
        Rule.required().warning(
          'It is recommended to use a 16:9 image for the cover image, https://calculateaspectratio.com/'
        )
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h2' },
            { title: 'Heading 2', value: 'h3' },
            { title: 'Heading 3', value: 'h4' },
            { title: 'Heading 4', value: 'h5' },
            { title: 'Heading 5', value: 'h6' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      {
                        type: 'post'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'externalLink',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image'
        }
      ]
    }
  ]
}
