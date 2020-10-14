const projects = require('./data/projects.json');
const blogs = require('./data/blogs.json');

exports.createPages = async ({ actions: { createPage } }) => {
  // Create project pages
  projects.forEach((project) => {
    createPage({
      path: `/project/${project.slug}/`,
      component: require.resolve('./templates/projects/project.js'),
      context: project
    });
  });
  // Create blog pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}/`,
      component: require.resolve('./templates/blogs/blog.js'),
      context: blog
    });
  });
};
