import path from 'path';

async function turnCategoriesIntoPages({ graphql, actions }) {
  const categoryTemplate = path.resolve('./src/templates/Category.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `${category.slug.current}`,
      component: categoryTemplate,
      context: {
        slug: category.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnCategoriesIntoPages(params)]);
}
