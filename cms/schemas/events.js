const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: [
        {
          type: "venue"
        }
      ]
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The town or city the event is taking place in."
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    },
    {
      name: "tickets",
      title: "Tickets",
      type: "string"
    }
  ]
};

const venue = {
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    }
  ]
};

export { event, venue };
