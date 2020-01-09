#效果图
##pc
![Image text](https://github.com/17600777607/vue-iview/blob/master/src/assets/demo/1.jpg)

## 移动
![Image text](https://github.com/17600777607/vue-iview/blob/master/src/assets/demo/2.jpg)
~~~~
此项目为  横向导航 项目   兼容 移动端   各种功能还在开发中


这里为了后期做权限验证 、动态菜单 把路由和菜单放到了一起，通过一个递归，生成组件对象和路由对象(文件目录在/libs/router-uilts)。 路由基本分三种：1、在菜单栏展示的路由，并且在layout组件中展示，首页；2、不在菜单栏展示 但是在 layout组件中展示，比如：设置、个人信息等；3、不在菜单栏展示，也不再layout组件中展示。比如：401错误页面、登录页面等 ；这三种模式基本就能满足开发需求了 ，目前这里只有一种 路由 在菜单栏展示 并且在layout中展示


配置打包路径  vue.config.js文件 来配置 ；后期的打包时去掉console、配置开发、生产环境等   这里配置
~~~~
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```
