const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [
        {
          type: 'venue'
        }
      ]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The town or city the event is taking place in.'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'tickets',
      title: 'Tickets',
      type: 'string',
      description: 'The URL for the event\'s ticketing page. If a free event with no tickets just add "#" or the url to the facebook event',
      validation: Rule => Rule.required(),
    }
  ]
};

const venue = {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(17)
          .error(
            'Please enter a name less than 17 characters. This keeps the layout clean.'
          )
    }
  ]
};

export { event, venue };
