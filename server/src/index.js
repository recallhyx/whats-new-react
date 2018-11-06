const Koa = require('koa');
const app = new Koa();

const port = 4000;

const main = ctx => {
    ctx.response.body = 'hello world';
};

app.use(main);


app.listen(port);

console.log(`app started at port ${port}...`);