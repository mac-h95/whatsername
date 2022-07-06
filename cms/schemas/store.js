const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'sale_price',
      title: 'Sale Price',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'option' }] }]
    },
    {
      name: 'available_in',
      title: 'Available in',
      type: 'string',
      description: 'The little bit of text that says "Available in..."'
    },
    {
      name: 'in_stock',
      title: 'In stock',
      type: 'boolean',
      description: 'Is this product in stock?'
    }
  ]
}

const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }]
    }
  ]
}

const option = {
  name: 'option',
  title: 'Option',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{ type: 'string' }],
      warning:
        "For custom text field options such as 'Tie Dye Colours' just write the word 'custom'"
    }
  ]
}

const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !document?.publishedOnce
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'string' }],
      readOnly: ({ document }) => !document?.publishedOnce
    },
    {
      name: 'fulfilled',
      title: 'Fulfilled',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !document?.publishedOnce
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => !document?.publishedOnce
    }
  ]
}

const customer = {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }
  ]
}

export { product, category, option, order, customer }
