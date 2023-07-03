# 学习HTML知识总结

## 1. HTML简介

HTML是Hyper Text Markup Language(超文本标记语言)的缩写, 它是用来创建网页的一种语言.
HTML使用标记标签来描述网页内容. HTML标签通常被尖括号<>包围起来.

## 2. HTML基本结构

HTML文档结构如下:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>文档标题</title>
</head>

<body>
  页面内容......
</body>

</html>
```

* `<!DOCTYPE html>`声明为HTML5文档
* `<html>`标签定义整个HTML文档
* `<head>`标签包含元数据
* `<body>`标签包含网页的内容

## 3. HTML标题

HTML标题使用 `<h1>` 到 `<h6>` 标签定义. 大小依次递减

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

##  4. HTML段落

可以使用 `<p>` 标签定义HTML段落.

```html
<p>这是段落一</p>
<p>这是段落二</p>
```

**p标签的属性**
`align` 属性: 设置段落对齐方式, 有: `left` 、 `right` 、 `center` 、 `justify` .

**段落内换行**
按回车键并不会真正换行, 只会在显示时换行. 需要在段落中进行强制换行, 使用 `<br>` 标签，如:

```html
<p>该段落<br>带有换行的</p>
```

## 5. HTML链接

使用 `<a>` 标签定义HTML超链接.

```html
<a href="https://www.baidu.com">百度</a>
```

* `href`属性指定链接的URL
* 链接文本在`<a>`标签内

## 6. HTML图像

使用 `<img>` 标签定义HTML图像.
```html 
<img src="url" width="宽度" height="高度" />
```

- `src`属性指定图片的URL
- `width`和`height`属性指定图片宽度和高度

## 7. HTML表格

使用 `<table>` , `<tr> ` , `<th>` 和 `<td>` 标签定义HTML表格.

```html
<table>
  <tr>
    <th>名称</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>小明</td>
    <td>18</td>
  </tr>
  <tr>
    <td>小张</td>
    <td>20</td>
  </tr>
</table>
```

* `<table>`定义表格
* `<tr>`定义行
* `<th>`定义表头单元格
* `<td>`定义标准单元格 


## 8. HTML列表

HTML有三种列表:  
**无序列表** 
标记默认是实心圆点,列表项顺序没有明确的顺序
- 使用`<ul>`和`<li>`标签:
```html
<ul>
  <li>aa</li>
  <li>bb</li>
  <li>cc</li> 
</ul> 
```

**有序列表** 
每个列表项会按顺序编号, 默认是1, 2, 3...
* 使用`<ol>`和`<li>`标签:

```html
<ol>
  <li>aa</li>
  <li>bb</li>
  <li>cc</li>
</ol>
```

**定义列表**
* 使用`<dl>`,  `<dt>`和`<dd>`标签:

`<dl>` 标签定义, `<dt>` 表示列表项名称, `<dd>` 表示列表项描述.

```html
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>
```


## 9. HTML表单

使用 `<form>` 标签定义HTML表单:

```html
<form>
  <div>
    <label>Name:</label>
    <input type="text" name="name">
  </div>
  <div>
    <label>Email:</label>
    <input type="email" name="email">
  </div>
  <div>
    <label>Message:</label><br>
    <textarea name="message" rows="10" cols="30"></textarea>
  </div>
  <div>
    <input type="submit" value="提交">
  </div>
</form>
```

* `<form>`标签定义HTML表单
* `<input>`标签定义输入字段, 类型有text, email, submit等
* `<label>`标签定义输入字段名称 
* `<textarea>`标签定义多行输入字段
* `<submit>`提交按钮

## 10. HTML注释

HTML注释使用 `<!-- -->` 语法可以注释单行或多行, :
```html 
<!-- 注释
    aaaa
    bbbb
-->
```

## 11. HTML颜色

HTML颜色可以使用颜色名称、RGB值、HEX值和HSL值表示:  
**颜色名**
red,blue,yellow...
- 颜色名称: `<div style="color:orange;">`

**RGB值**
RGB值指的是红绿蓝三个颜色的数值,范围是0-255。
- RGB值:`<div style="color:rgb(255,0,0);">`

**16进制值**
十六进制颜色值的格式是:#RRGGBB,RR是红色通道值,GG是绿色通道值,BB是蓝色通道值。
- HEX值:`<div style="color:#ffffff;">`

**HSL值**
 色调(Hue):0到360度,表示颜色的基本类型,如红色、黄色等。
- 饱和度(Saturation):0%到100%,表示颜色的浓度,越高越浓郁,越低越灰暗。
- 亮度(Lightness):0%到100%,表示颜色的明暗度,0%是黑色,50%是正常,100%是白色。
- HSL值: `<div style="color:hsl(0, 100%, 50%);">`

HSL也可以指定透明度:
- hsla(色调, 饱和度%, 亮度%, 透明度)

**透明度**
使用rgba()函数指定颜色的透明度，范围0~1.0
- 透明度:`<p style="color:rgba(255, 0, 0, 0.5);">半透明红色文字</p>`

## 12. HTML CSS

CSS用于设置HTML元素的样式.CSS可以写在HTML文档内部或外部。
* 内部CSS使用`style`属性:
```html
<p style="color:orange;margin-top:20px;">段落</p>
```

* 外部CSS使用 `link` 标签链接外部CSS文件:

```html
<link rel="stylesheet" href="styles.css">
```

## 13. HTML JavaScript

JavaScript用于实现网页交互效果. JavaScript可以写在HTML文档内部或外部.
* 内部JavaScript使用 `script` 标签:

```html
<script>
  alert('Hello JavaScript!');
</script>
```

* 外部JavaScript链接外部JS文件:

```html
<script src="main.js"></script>
```

## 14. HTML视频(Video)

使用 `<video>` 标签播放视频:

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```

* `controls`Boolean值, 显示播放控件
* `src`属性指定视频地址
* `type`属性指定视频格式, 比如`video/mp4`等

## 15. HTML音频(Audio)

使用 `<audio>` 标签播放音频:

```html
<audio controls>
  <source src="XXX.mp3" type="audio/mpeg">
</audio>
```

* `controls`Boolean值, 显示播放控件
* `src`属性指定音频地址
* `type`属性指定音频格式, 比如`audio/mpeg`等 
