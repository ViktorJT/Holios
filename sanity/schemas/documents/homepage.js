export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [
    { name: 'introduction', title: 'Introduction', options: { columns: 2 } },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      hidden: true,
      validation: (Rule) =>
        Rule.required().max(60).warning('Should be under 60 characters'),
    },
    {
      title: 'Header Image',
      name: 'image',
      type: 'altImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'introHeading',
      type: 'text',
      rows: 3,
      fieldset: 'introduction',
      validation: (Rule) =>
        Rule.required().max(85).warning('Should be under 85 characters'),
    },
    {
      title: 'Text',
      name: 'introText',
      type: 'text',
      rows: 3,
      fieldset: 'introduction',
      validation: (Rule) =>
        Rule.required().max(240).warning('Should be under 85 characters'),
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
