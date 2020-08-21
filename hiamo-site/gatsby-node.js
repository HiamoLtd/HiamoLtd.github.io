const projects = require('./data/projects.json');

exports.createPages = async ({ actions: { createPage } }) => {
  projects.forEach((project) => {
    createPage({
      path: `/project/${project.slug}/`,
      component: require.resolve('./templates/projects/project.js'),
      context: project
    });
  });
};
