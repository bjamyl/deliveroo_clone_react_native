export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Cateogry Name",
      type: "string",
      validation: (Rule) => Rule.required(0),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
