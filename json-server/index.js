const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')



const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname,"db.json"))


server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);


server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 3000);
    });
    next();
});


server.post('/login',(req,res)=>{
    return res.json({
        name:'vadim',
        id:1
    })
})


server.use(router)

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
