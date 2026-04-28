---
url: /components/ka-kbd.md
---
# KaKbd 键盘按键组件

用于展示键盘按键组合的视觉样式，常用于快捷键提示。

## 使用场景

* 快捷键提示
* 操作指南中的按键说明
* 命令面板的快捷键展示
* 帮助文档中的键盘操作说明

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 按键内容（字符、图标等） |

## 示例

### 基础用法

```vue
<template>
  <KaKbd>⌘</KaKbd>
  <KaKbd>K</KaKbd>
</template>
```

### 单个按键

```vue
<template>
  <KaKbd>⌘</KaKbd>
  <KaKbd>K</KaKbd>
  <KaKbd>Enter</KaKbd>
</template>
```

### 组合按键（与 KaKbdGroup 配合使用）

```vue
<template>
  <KaKbdGroup>
    <KaKbd>⌘</KaKbd>
    <KaKbd>K</KaKbd>
  </KaKbdGroup>
  
  <KaKbdGroup>
    <KaKbd>Ctrl</KaKbd>
    <KaKbd>Shift</KaKbd>
    <KaKbd>P</KaKbd>
  </KaKbdGroup>
</template>
```

### 带图标的快捷键

```vue
<template>
  <KaKbdGroup>
    <KaKbd>⌘</KaKbd>
    <KaIcon name="i-lucide:command" />
  </KaKbdGroup>
</template>
```

### 在提示文字中使用

```vue
<template>
  <div class="text-muted-foreground">
    按 <KaKbdGroup><KaKbd>⌘</KaKbd><KaKbd>K</KaKbd></KaKbdGroup> 快速搜索
  </div>
</template>
```

## 注意事项

### 样式特点

* 小号字体（`text-xs`）
* 中等字重（`font-medium`）
* 圆角背景
* 内边距适当
* 支持 SVG 图标（自动调整尺寸）

1. **配合使用**：组合按键时请使用 `KaKbdGroup` 包裹多个 `KaKbd`
2. **内容长度**：按键内容不宜过长，适合单个字符或简短单词
3. **图标支持**：可以使用 `KaIcon` 组件显示图标，图标会自动调整为合适尺寸
