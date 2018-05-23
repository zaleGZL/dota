const Router = require('koa-router')
const axios = require('axios')

const apiRouter = new Router()

apiRouter.prefix('/api')

apiRouter.post('/predict', async ctx => {
  const {
    ra0: Ra0,
    ra1: Ra1,
    ra2: Ra2,
    ra3: Ra3,
    ra4: Ra4,
    di0: Di0,
    di1: Di1,
    di2: Di2,
    di3: Di3,
    di4: Di4
  } = ctx.request.body

  await axios
    .get(
      `http://www.xuzhe951024.cn/Servlet_cauculate?Ra0=${Ra0}&Ra1=${Ra1}&Ra2=${Ra2}&Ra3=${Ra3}&Ra4=${Ra4}&Di0=${Di0}&Di1=${Di1}&Di2=${Di2}&Di3=${Di3}&Di4=${Di4}`
    )
    .then(response => {
      console.log(response.data)

      ctx.body = response.data
    })
})

module.exports = apiRouter
