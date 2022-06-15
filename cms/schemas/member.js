const member = {
  name: "member",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "pronouns",
      title: "Pronouns",
      type: "pronoun"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "string"
    },
    {
      name: "founder",
      title: "Founder",
      type: "boolean"
    }
  ]
};

const pronoun = {
  name: "pronoun",
  title: "Pronouns",
  type: "autocomplete",
  options: {
    options: [{ value: "He/Him" }, { value: "She/Her" }, { value: "They/Them" }]
  }
};

export { member, pronoun };
