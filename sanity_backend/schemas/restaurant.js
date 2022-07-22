export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Restaurant image",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating (Between 1-5)",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Enter a value between 1 and 5"),
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
