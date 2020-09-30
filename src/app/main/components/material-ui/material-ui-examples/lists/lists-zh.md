---
title: React 列表组件
components: Collapse, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader
---
# 列表

<p class="description">列表是文本或图像的连续、垂直索引。</p>

[列表](https://material.io/design/components/lists.html) 是一组连续的文本或图像。 它们由包含主要和补充操作的项目组成，这些操作由图标和文本表示。

## 简易列表

{{"demo": "pages/demos/lists/SimpleList.js"}}

上一个样例的最后一项展示了如何渲染一个链接：

```jsx
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//...

<ListItemLink href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemLink>
```

你可以从这里查看[React Router与文档此部分结合使用的相关样例](/guides/composition/#react-router)

## 文件夹列表

{{"demo": "pages/demos/lists/FolderList.js"}}

## 嵌入列表

{{"demo": "pages/demos/lists/InsetList.js"}}

## 嵌套列表

{{"demo": "pages/demos/lists/NestedList.js"}}

## 可选的 ListItem

{{"demo": "pages/demos/lists/SelectedListItem.js"}}

## 固定 Subheader 列表

滚动列表时，子标题保持固定在屏幕的顶端，直到被下一个子标题推离屏幕。

此功能依赖于 CSS sticky 定位。 不幸的是, 这一功能并未在我们支持的所有浏览器中 [实现](https://caniuse.com/#search=sticky) 。 如果不支持, 则默认为 `disableSticky`。

{{"demo": "pages/demos/lists/PinnedSubheaderList.js"}}

## 列表控件

### 复选框

复选框可以是主操作或辅助操作。

复选框是列表项的主要操作和状态指示器。 评论按钮是辅助操作和单独的目标。

{{"demo": "pages/demos/lists/CheckboxList.js"}}

复选框是列表项的辅助操作和单独的目标。

{{"demo": "pages/demos/lists/CheckboxListSecondary.js"}}

### 开关

开关是辅助操作和单独的目标。

{{"demo": "pages/demos/lists/SwitchListSecondary.js"}}

## 交互式

下面是一个交互式演示，可让您探索不同设置的可视结果：

{{"demo": "pages/demos/lists/InteractiveList.js"}}