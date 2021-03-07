import { AiOutlineEdit as icon } from 'react-icons/ai';

export default {
  title: 'Treatment',
  name: 'treatment',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'altImage',
      description: 'Choose an image to represent this treatment',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Choose a title for this treatment',
      validation: (Rule) =>
        Rule.required().max(60).warning('Should be under 60 characters'),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      rows: 2,
      description: 'A short summary of the benefits of this treatment',
      validation: (Rule) =>
        Rule.required().max(155).warning('Should be under 155 characters'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'altImage' }],
      description: 'A full description of this treatment',
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
