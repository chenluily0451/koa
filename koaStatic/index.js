const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../static'

// 加载模板引擎
app.use(views(path.join(__dirname, '../view'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  let myejs = 'hello world '
  await ctx.render('index', {
    title,
    myejs
  })
})

app.listen(3000)
console.log('ejs started~')