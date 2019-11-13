module.exports = {
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/api/goods',function(req,res){
                    res.json({
                        code:101,
                        title:"本地虚拟化接口测试",
                        data:{
                            data:[1,2,3,4,5],
                            userID:20
                        }
                    })
                })
            }
        }
    }
}