import { AiOutlineEdit as icon } from 'react-icons/ai';

export default {
  title: 'Service',
  name: 'treatment',
  type: 'object',
  fieldsets: [
    {
      name: 'price',
      title: 'Price',
      description: 'What is the cost of this service?',
      options: { columns: 2 },
    },
  ],
  icon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'altImage',
      description: 'Choose an image to represent this service',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Choose a title for this service',
      validation: (Rule) =>
        Rule.required().max(60).warning('Should be under 60 characters'),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      rows: 2,
      description: 'A short summary of the benefits of this service',
      validation: (Rule) =>
        Rule.required().max(155).warning('Should be under 155 characters'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'altImage' }],
      description: 'A full description of this service',
      validation: (Rule) => Rule.required(),
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
          { title: 'per behandeling', value: 'per behandeling' },
          { title: '75 minuten', value: '75 minuten' },
          { title: 'totaal', value: 'totaal' },
        ],
      },
      fieldset: 'price',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Generate a new slug from the title, or create your own',
      options: {
        source: (_, options) => options.parent.title,
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
