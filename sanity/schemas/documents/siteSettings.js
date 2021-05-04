// TODO Update experimental actions to use the document actions api instead. info in the reference docs on sanity. This solution will be deprecated soon I think

// TODO Does the image need to be here? The SEO component gets an image in as a prop on each page, ideally

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [
    { name: 'address', title: 'Address', options: { columns: 2 } },
    { name: 'contact', title: 'Contact Details', options: { columns: 2 } },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      readOnly: true,
      validation: (Rule) =>
        Rule.required().max(60).warning('Should be under 60 characters'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(240).warning('Should be under 240 characters'),
    },
    {
      title: 'About',
      name: 'about',
      type: 'array',
      of: [{ type: 'block' }, { type: 'altImage' }],
      description: 'About holios in detail',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Solicitation',
      name: 'solicitation',
      type: 'text',
      rows: 3,
      description:
        'A short sentence meant to persuade visitors to make an appointment',
      validation: (Rule) =>
        Rule.required()
          .min(64)
          .max(240)
          .warning('Should be between 80 and 240 characters'),
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'altImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Profile image',
      name: 'profile',
      type: 'altImage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      fieldset: 'contact',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
      fieldset: 'contact',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'email',
      fieldset: 'contact',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'telephone',
      title: 'Phone Number',
      type: 'string',
      fieldset: 'contact',
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
      title: 'Geolocation',
      name: 'location',
      type: 'geopoint',
      validation: (Rule) => Rule.required(),
    },
  ],
};
