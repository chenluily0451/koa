const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
var mysql = require('mysql-co');


// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../static'

// // 加载模板引擎
app.use(views(path.join(__dirname, '../view'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  let myejs = 'hello world'
  let users = ['chenlu', 'xiangyang','wudan']
  await ctx.render('index', {
    title,
    myejs,
    users
  })
})

var co = require('co');
co(function *() {
  var db = mysql.createConnection({ user: 'root', database: 'koa_database', password: ''});
  console.log( yield db.query("select * from users where id = '1'") );
  console.log( yield db.query("select * from users where id = '2'") );
 
  db.end();
});

app.listen(3000)
console.log('ejs started~')