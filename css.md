# CSS 学习总结

## 1. CSS简介

CSS (Cascading Style Sheets, 层叠样式表), 用于为结构化文档(如 HTML 文档或 XML 应用)添加样式(字体、颜色、边距等)
css有以下方式引入:
* 行内样式
  使用 `style` 属性在元素上直接设置样式, 如
 `<h1 style="color: yellow;">标题</h1>`

* 内部样式表 
  使用 `<style>` 标签在文档内部定义样式.
  

```html
  <head>
    <style>
      h1 {
        color: yellow;
      }
    </style>
  </head>

  <body>
    <h1>标题</h1>
  </body>
```

* 外部样式表 
  使用 `<link>` 在 `<head>` 中引入外部CSS文件
  如 `<link rel="stylesheet" href="styles.css">`

## 2. CSS 属性

常用属性有:
* 颜色属性: 如 `color`,`background-color` 等
* 文本属性: 如 `font-size`,`font-weight` 等
* 盒子模型: 如 `margin`,`padding`,`border` 等
* 定位属性: 如 `position`,`left`,`right`,`top`,`bottom` 等

## 3. 样式继承 

子元素会继承父元素的某些样式, 如 `font-size` , `color` , `text-align` 等会继承, 但 `margin` , `padding` , `border` , `position` 等不会继承.
比如

```HTML
<div style="color: yellow; font-size: 66px;">
  <p>段落1</p>
  <p>段落2</p>
</div>
```

`<div>` 元素的 `color` 和 `font-size` 样式会被子元素 `<p>` 继承, 所以段落也是黄色字体大小为66px.

## 4. CSS 优先级

1. 最近的祖先样式>其他祖先样式
2. "直接样式">"祖先样式"
3. 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
4.  ID 选择器的个数(a), 类选择器、属性选择器以及伪类选择器的个数和(b), 标签选择器和伪元素选择器的个数和(c). 按 a、b、c 的顺序依次比较大小, 大的则优先级高, 相等则比较下一个. 若最后两个的选择符中 a、b、c 都相等, 则按照"就近原则"来判断
5. 属性后有 `!important` 的属性拥有最高优先级. 若同时插有 `!important`, 则再利用规则 3、4 判断优先级

## 5. CSS 盒模型 

CSS 盒模型包括:
* Content: 内容, 显示文本、图像等
* Padding: 内边距, 内容和边框之间的空间
* Border: 边框
* Margin: 外边距, 边框和其他元素之间的空间

重置默认操作

```CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## 6. CSS 浮动(float)

CSS 浮动用于让块级元素浮动. 常用的有:
* `float: left` 元素浮动到左侧
* `float: right`元素浮动到右侧
* `float: none` 默认, 不浮动

当元素浮动后, 它会转变为行内块元素.

**清除浮动**
常用的清除浮动方法有:
* 为父元素添加clearfix:

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

```HTML
<div class="clearfix">
  <div style="float: left;">左浮动</div>
</div>
```
 
* 使用 CSS 的 clear 属性:
    

```css
.son {
   clear: both;
}
```    

## 7. CSS 定位

CSS 定位用于指定元素在文档中的位置. 主要有:
* `static`默认值, 没有定位, 元素出现在正常的流中
* `relative`相对定位, 相对于元素在原正常流中的位置进行定位,通过`left, right, top, bottom`属性进行偏移，会保留原本的空间。
* `absolute`绝对定位, 相对于最近一级的已定位(`relative,absolute`)父元素进行定位
* `fixed`固定定位, 相对于浏览器视窗进行定位,脱离正常文档流

## 8. CSS 居中

* 水平居中:
  - margin: auto: 
  ```CSS
  .parent {
      width: 600px;  
  }
  .child {
      width: 200px;
      margin: auto;
  }
  ```

  + 绝对定位: 
  ```CSS
    .parent {
      position: relative;
    }

    .child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  ```

  + Flexbox: 
  ```CSS
    .parent {
      display: flex;
      justify-content: center;
    }
  ```

  

* 垂直居中:
  + 绝对定位: 
  ```CSS
    .parent {
      position: relative;
    }

    .child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  ```

  + Flexbox: 
  ```CSS
    .parent {
      display: flex;
      align-items: center;
    }
  ```



## 9. CSS 选择器

选择器用于选择 DOM 元素, 主要有以下几种:
  + 元素选择器: 根据标签选择, 如 `div{ }`

  + 类选择器: 根据 class 属性选择, 如 `.class_name{ }`

  + ID 选择器: 根据 ID 属性选择, 如 `#id_name{ }`

  + 后代选择器: 选择某元素的后代元素, 如 `div span{ }`

  + 子元素选择器: 选择某元素的直接子元素, 如 `div > span{ }`

  + 相邻兄弟选择器: 选择某元素之后紧跟的同级元素, 如 `div + span`

  + 并集选择器: 选择多个选择器指定的所有元素, 如 `p, ul, ol { }`
  
* 伪类选择器: 
  + `:hover` 当鼠标悬停在元素上时的样式.
  ```css
    a:hover {
      color: blue;
    }
  ```

  + `:focus` 当元素获取焦点时的样式.
  ```css 
  input:focus {

      border: 8px solid blue;  

  } 
  ```

  - `:active` 当鼠标点击元素时的样式。 
  ```css
  a:active {
      color: yellow; 
  }
  ```

  + `:first-child` 选择元素的第一个子元素.
  ```css
    ul>li:first-child {
      font-size: 10px;
    }
  ``` 

  - `:last-child` 选择元素的最后一个子元素。 
  ```css 
  ul>li:last-child {
    color: red;
  }
  ```

  + `:nth-child(n)` 选择元素的第n个子元素.
  ```css 
  ul > li:nth-child(3) {

      color: red;
  }
  ```



## 10. 边框 

使用 `border` 属性设置边框:
* `border-width` 设置边框宽度
* `border-style` 设置边框样式, 如`solid`、`dashed`等 
* `border-color` 设置边框颜色
* `border-radius` 设置边框圆角


## 11. 背景

* `background-color`设置元素背景颜色.
* `background-image`设置背景图片url.
* `background-repeat`设置背景图片如何重复, 有`repeat` 、 `repeat-x` 、 `repeat-y` 、 `no-repeat`.
* `background-position`设置背景图片位置, 如`center` .
* `background-size` 设置背景图片大小,  `contain` 、 `cover` 、 `长度` 、 `百分比`.

## 12.  渐变 

使用 `gradient` 创建颜色渐变, 如:

```css
#grad {
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}
```

方向可以是`to bottom`、`to right`等.

* **线性渐变(Linear Gradients)**: 向下/向上/向左/向右/对角方向
* **径向渐变(Radial Gradients)**: 由它们的中心定义

## 13.  动画

使用 `@keyframes` 规则创建动画, 并使用 `animation` 属性应用动画.
* `@keyframes`
定义动画的关键帧, 如:

```css
@keyframes slidein {
  from {
    width: 400%;
  }

  to {
    width: 100%;
  }
}
```

* `animation` 属性应用动画, 如:

```css
div {
  animation: slidein 2s;
}
```

可以设置其他属性:
* `animation-name`: 动画名称, 对应`@keyframes`规则
* `animation-duration`: 动画持续时间
* `animation-timing-function`: 设置动画的速度曲线,  `ease` ,  `linear` ,  `ease-in` ,  `ease-out` , `ease-in-out`
* `animation-delay`: 动画开始之前的延迟
* `animation-iteration-count`: 设置动画播放次数,`infinite`为无限次
* `animation-direction`: 设置动画方向,`normal`,`reverse` ,  `alternate` ,  `alternate-reverse`
* `animation-fill-mode`: 设置动画前后的状态,  `forwards` ,  `backwards` , `both` , `none`.

## 14. 弹性盒子

弹性盒子(flexbox), 是当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有合适行为的弹性布局方式. 

 **flex 容器属性**

  + `flex-direction`: 主轴的方向, 从左到右`row`、水平的从右到左`row-reverse）`、从上到下`column`和从下到上`column-reverse`。
  + `flex-wrap`: 是否允许换行, 不换行`nowrap`、正常换行`wrap`和反向换行`wrap-reverse`。
  + `justify-content`: 主轴上的对齐方式, 轴起点`flex-start`、元素紧靠主轴终点`flex-end`、元素在主轴上居中`center`、元素之间平均分布`space-between`和元素周围平均分布`space-around`。
  + `align-items`: 交叉轴上的对齐方式,交叉轴起点`flex-start`、元素紧靠交叉轴终点`flex-end`、元素在交叉轴上居中`center`、元素的基线对齐`baseline`和元素拉伸填满整个交叉轴`stretch`。

