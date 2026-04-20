import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Branding', value: 'Branding' },
          { title: 'Web Design', value: 'Web Design' },
          { title: 'Photography', value: 'Photography' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'UI/UX', value: 'UI/UX' },
          { title: 'Motion', value: 'Motion' },
          { title: 'Print', value: 'Print' },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tall',
      title: 'Tall Card',
      type: 'boolean',
      description: 'Makes this card taller in the masonry grid. Alternate tall/short for a staggered look.',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'externalImageUrl',
      title: 'External Image URL',
      type: 'url',
      description: 'Fallback if no Sanity image is uploaded. Paste any https:// image URL.',
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      tags: 'tags',
    },
    prepare({ title, media, tags }) {
      return {
        title,
        media,
        subtitle: tags?.join(', '),
      }
    },
  },
})
