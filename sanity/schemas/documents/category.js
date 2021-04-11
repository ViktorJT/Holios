export default {
  title: 'Category',
  name: 'category',
  type: 'document',
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
      name: 'treatments',
      type: 'array',
      title: 'Services',
      description: 'Which services belong to this category?',
      of: [
        {
          title: 'service',
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
