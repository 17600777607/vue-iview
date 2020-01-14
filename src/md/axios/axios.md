##请求示例
~~~~
getItemList(qs.stringify(this.getItemListData)).then(res=>{
 //这个接口数据是application/x-www-form-urlencoded，所以参数要进行qs转化
        // 请求返回数据
}).catch(err=>{
  // 请求失败执行
})
~~~~
~~~~
getItem(this.getItemListData).then(res=>{
        // 请求返回数据
    }).catch(err=>{
        // 请求失败执行
    })
~~~~
~~~~
getItemInfo(`?page=${this.getItemInfoData.page}&size=${this.getItemInfoData.size}`).then(res=>{
        // get请求，url传值。用的是字符串模板传值
        // 请求返回数据
    }).catch(err=>{
        // 请求失败执行
    })
~~~~