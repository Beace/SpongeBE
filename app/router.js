'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/v1/articles', controller.articles.index);
  router.get('/v1/articles/:id', controller.articles.articleById);
  router.post('/v1/article', controller.articles.postArticle);
};
