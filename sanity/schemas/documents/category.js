export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fieldsets: [
    {
      name: 'price',
      title: 'Price',
      description: 'What is the cost of treatments in this category?',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'altImage',
      description: 'Choose an image to represent this category',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Choose a title for this category',
      validation: (Rule) =>
        Rule.required().max(60).warning('Should be under 60 characters'),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      rows: 2,
      description: 'A short summary of this category',
      validation: (Rule) =>
        Rule.required().max(155).warning('Should be under 155 characters'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'altImage' }],
      description: 'A full description of this category',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Illustration',
      name: 'illustration',
      type: 'image',
      description: 'Choose an illustration to use for this category',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Benefits',
      name: 'benefits',
      type: 'array',
      of: [{ type: 'string', validation: (Rule) => Rule.max(60) }],
      description: 'The benefits of this category',
      validation: (Rule) => Rule.required().max(8),
    },
    {
      name: 'cost',
      title: '€ Cost',
      type: 'number',
      fieldset: 'price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      options: {
        list: [
          { title: 'per 20 minutes', value: 'per 20 minutes' },
          { title: 'per 30 minutes', value: 'per 30 minutes' },
          { title: 'per hour', value: 'per hour' },
          { title: 'per session', value: 'per session' },
          { title: 'total', value: 'total' },
        ],
      },
      fieldset: 'price',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'treatments',
      type: 'array',
      title: 'Treatments',
      description: 'Which treatments belong to this category?',
      of: [
        {
          title: 'treatment',
          name: 'treatment',
          type: 'treatment',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Generate a new slug from the title, or create your own',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
