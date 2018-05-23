const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const apiRouter = require('./apiRouter')

const app = new Koa()

// 静态文件中间件
app.use(
  serve(path.resolve(__dirname, './public'), {
    maxage: 7 * 24 * 60 * 60 * 1000
  })
)

// 返回JSON结构的数据
app.use(
  json({
    pretty: false
  })
)

// 解析请求主体
app.use(bodyParser())

app.use(apiRouter.routes())

app.use(async ctx => {
  ctx.body = '404'
})

// 内部错误处理
app.on('error', function(err, ctx) {
  console.log('server error', err, ctx)
})

app.listen(4000, () => console.log('Koa app listening on 4000'))
