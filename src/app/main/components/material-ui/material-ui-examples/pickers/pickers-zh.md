---
title: 日期、时间选择器 React 组件
components: TextField
---
# Pickers

<p class="description">选择器提供了一种从预先设定的集合中选取单个值的简单方法。</p>

- 在移动端，选择器最适合在确认对话框中展示。
- 对于内联显示（如在一个表单中），请考虑使用紧凑型控件，如分段下拉按钮。

#### 注意

我们最近正回退到**原生输入控件**。 如果你有兴趣实现或者已经实现了一个符合 Material Design 的且用户体验良好的富选择器，请在[ #4787 ](https://github.com/mui-org/material-ui/issues/4787)和[ #4796 ](https://github.com/mui-org/material-ui/issues/4796)告诉我们。 我们会添加您的项目链接或者示例到文档当中。 下面是一些**有前途的**的组件: - [material-ui-pickers](https://github.com/dmtrKovalenko/material-ui-pickers)：日期和时间选取器。 - [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker)：时间选择器。 - [material-ui-next-pickers](https://github.com/chingyawhao/material-ui-next-pickers)：日期和时间选择器.

⚠️ 浏览器原生输入控件[并不完美](https://caniuse.com/#feat=input-datetime)。

## Date pickers

一个原生的 `type="date"` 日期选择器示例 ，它也可以用作日历：

{{"demo": "pages/demos/pickers/DatePickers.js"}}

## Time pickers

一个原生的 `type="time"` 时间选择器示例 ：

{{"demo": "pages/demos/pickers/TimePickers.js"}}

## Date & Time pickers

一个原生的 `type="datetime-local"` 日期和时间选择器示例 ：

{{"demo": "pages/demos/pickers/DateAndTimePickers.js"}}