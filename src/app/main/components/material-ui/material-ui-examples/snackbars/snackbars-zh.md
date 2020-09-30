---
title: React 消息条(Snackbar) 组件
components: Snackbar, SnackbarContent
---
# 消息条(Snackbar)

<p class="description">消息条(Snackbar)通过一条消息来提供有关应用进程的简短信息-通常在屏幕底部</p>

[消息条(Snackbar)](https://material.io/design/components/snackbars.html) 通知用户应用程序已执行或将执行的进程。 它们会从屏幕底部短暂出现。 它们不应中断用户体验, 也不要求用户的操作来关闭。

消息条(Snackbar)包含与执行的操作直接相关的单行文本。 它们可能包含文本操作, 但没有图标。您可以使用它们来显示通知。

#### 频率

一次只能显示一个消息条(Snackbar)。

## 基本消息条（Snackbar)

一个旨在重现Google Keep消息条行为的基本消息条(Snackbar)。

{{"demo": "pages/demos/snackbars/SimpleSnackbar.js"}}

## 消息长度

不同消息长度的消息条(Snackbar)。

{{"demo": "pages/demos/snackbars/LongTextSnackbar.js"}}

## 定位消息条(Snackbar)

在很多情况下消息条(Snackbar)的位置需要更灵活些。

{{"demo": "pages/demos/snackbars/PositionedSnackbar.js"}}

## 过渡动画

### 控制方向

控制过渡动画的方向。幻灯片效果是默认的过渡动画。

{{"demo": "pages/demos/snackbars/DirectionSnackbar.js"}}

### 更改过渡动画

同时使用不同的过渡动画。

{{"demo": "pages/demos/snackbars/FadeSnackbar.js"}}

### 不要遮住其他浮动的操作按钮。

当出现消息条(Snackbar)时底部的浮动按钮自动上升一个消息条高度。

{{"demo": "pages/demos/snackbars/FabIntegrationSnackbar.js"}}

### 连续的消息条(Snackbar)

按照[Google的指引](https://material.io/design/components/snackbars.html#snackbars-toasts-usage),当第一个消息条(Snackbar)还在显示时如果第二条消息条(Snackbar)被触发的话, 第一条消息条(Snackbar)应该在第二条消息条(Snackbar)开始上浮出现时往下方收缩消失.

{{"demo": "pages/demos/snackbars/ConsecutiveSnackbars.js"}}

## 自定义的消息条(Snackbar)

如果您有阅读[重写样式文档页面](/customization/overrides/) 但你还不是很自信能够完全掌握， 以下是如何更改一个消息条(Snackbar)的主要颜色的示例

{{"demo": "pages/demos/snackbars/CustomizedSnackbars.js"}}

## 补充项目

对于更高级的用例，您可以利用：

- [notistack](https://github.com/iamhosseindhv/notistack) Highly customisable notification snackbars that can be stacked on top of each other.