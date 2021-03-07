export default {
  name: 'contact',
  type: 'object',
  title: 'Contact Details',
  fieldsets: [
    { name: 'address', options: { columns: 2 } },
    { name: 'name', options: { columns: 2 } },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'telephone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'street',
      type: 'string',
      title: 'Street',
      fieldset: 'address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'streetNumber',
      type: 'string',
      title: 'Number',
      fieldset: 'address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'postCode',
      type: 'string',
      title: 'Post Code',
      fieldset: 'address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      fieldset: 'address',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
      validation: (Rule) => Rule.required(),
    },
  ],
};
