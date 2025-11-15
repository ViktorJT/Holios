// TODO Add icons per item
// TODO Update documentId (this just SETS the id, it doesn't look for one)

export default (S) => {
  const hiddenDocTypes = (listItem) =>
    !['siteSettings', 'homepage', 'category', 'treatment'].includes(
      listItem.getId()
    );

  return S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.divider(),
      S.documentListItem()
        .title('Homepage')
        .schemaType('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.documentListItem()
        .title('Massage')
        .schemaType('category')
        .child(S.document().schemaType('category').documentId('massage')),
      S.documentListItem()
        .title('Coaching')
        .schemaType('category')
        .child(S.document().schemaType('category').documentId('coaching')),
      S.documentListItem()
        .title('Cursussen')
        .schemaType('category')
        .child(S.document().schemaType('category').documentId('cursussen')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
