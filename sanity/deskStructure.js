// TODO Add icons per item
// TODO Update documentId (this just SETS the id, it doesn't look for one)

import S from '@sanity/desk-tool/structure-builder';

import {
  RiHome5Fill,
  RiMentalHealthFill,
  RiSettings3Fill,
  RiChatSmile2Fill,
  RiHandHeartFill,
} from 'react-icons/ri';

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'homepage', 'category', 'treatment'].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site Settings')
        .icon(RiSettings3Fill)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.divider(),
      S.documentListItem()
        .title('Homepage')
        .schemaType('homepage')
        .icon(RiHome5Fill)
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.documentListItem()
        .title('Massage')
        .schemaType('category')
        .icon(RiHandHeartFill)
        .child(S.document().schemaType('category').documentId('massage')),
      S.documentListItem()
        .title('Coaching')
        .schemaType('category')
        .icon(RiMentalHealthFill)
        .child(S.document().schemaType('category').documentId('coaching')),
      S.documentListItem()
        .title('Cursussen')
        .schemaType('category')
        .icon(RiChatSmile2Fill)
        .child(S.document().schemaType('category').documentId('cursussen')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
