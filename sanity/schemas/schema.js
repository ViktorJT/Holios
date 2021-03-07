import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// ***********
// * Documents
// ***********

import siteSettings from './documents/siteSettings';
import homepage from './documents/homepage';
import category from './documents/category';

// ***********
// * Objects
// ***********

import altImage from './objects/altImage';
import treatment from './objects/treatment';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    homepage,
    category,
    altImage,
    treatment,
  ]),
});
