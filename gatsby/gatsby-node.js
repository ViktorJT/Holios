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

async function turnTreatmentsIntoPages({ graphql, actions }) {
  const treatmentTemplate = path.resolve('./src/templates/Treatment.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          slug {
            current
          }
          treatments {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((node) => {
    node.treatments.forEach((treatment) => {
      actions.createPage({
        path: `${node.slug.current}/${treatment.slug.current}`,
        component: treatmentTemplate,
        context: {
          slug: treatment.slug.current,
        },
      });
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnCategoriesIntoPages(params),
    turnTreatmentsIntoPages(params),
  ]);
}
