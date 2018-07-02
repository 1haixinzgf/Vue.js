网站由网页构成，用超链接链接

web app mobile   native app(ios,android)

多页应用 很多页面， 会跳转  重新刷新页面
# 缺点
- 用户体验极差
每次点连接， 都要等http请求及响应， 整个页面的刷新， 可以看到页面白一下， 如果传输时间大于0.5s，会看到明显的白屏
- 相同的html片段重复被下载

# 解决方案

1. preventDefault a
2. herf attribute
3. jquery ajax 动态得到html的内容
4. p content img src 
$('').content('')   $('').src('')

SPA  Single Page  Application
单页应用

- 页面的状态可以对应一个路由
SPA 解决了用户体验的问题， 但却带来内一个及其严重的问题
浏览记录没有了， 
history

5. 如何为每个状态改变， (路由状态)  产生一个url(路由) 并产生一次浏览历史记录
让SPA的访问  更像传统的请求  location浏览器地址栏上的操作就可以使用了(history.go(-1))
6. 如何主动去设置 history

- 一个页面对应多个页面状态， 每个页面状态都有一个rount路由(地址，state，数据)，又会对应一个组件
vue单页应用开发 有rount响应 匹配相应的组件显示， 在一直组件化的过程