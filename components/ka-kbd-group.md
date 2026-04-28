---
url: /components/ka-kbd-group.md
---
# KaKbdGroup 键盘组合组件

用于包裹多个 `KaKbd` 组件，展示组合按键的容器组件。

## 使用场景

* 快捷键组合展示
* 键盘操作说明
* 命令面板提示
* 帮助文档中的多键组合说明

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 包含的 `KaKbd` 组件 |

## 示例

### 基础用法

```vue
<template>
  <KaKbdGroup>
    <KaKbd>⌘</KaKbd>
    <KaKbd>K</KaKbd>
  </KaKbdGroup>
</template>
```

### 双键组合

```vue
<template>
  <KaKbdGroup>
    <KaKbd>⌘</KaKbd>
    <KaKbd>K</KaKbd>
  </KaKbdGroup>
</template>
```

### 三键组合

```vue
<template>
  <KaKbdGroup>
    <KaKbd>Ctrl</KaKbd>
    <KaKbd>Shift</KaKbd>
    <KaKbd>P</KaKbd>
  </KaKbdGroup>
</template>
```

### 带加号分隔符

```vue
<template>
  <KaKbdGroup>
    <KaKbd>⌘</KaKbd>
    <span class="text-muted-foreground">+</span>
    <KaKbd>K</KaKbd>
  </KaKbdGroup>
</template>
```

### 在表格中展示快捷键

```vue
<template>
  <table>
    <tr>
      <td>搜索</td>
      <td><KaKbdGroup><KaKbd>⌘</KaKbd><KaKbd>K</KaKbd></KaKbdGroup></td>
    </tr>
    <tr>
      <td>新建</td>
      <td><KaKbdGroup><KaKbd>⌘</KaKbd><KaKbd>N</KaKbd></KaKbdGroup></td>
    </tr>
  </table>
</template>
```

## 注意事项

1. **仅用于组合**：此组件仅用于包裹多个 `KaKbd`，不建议单独使用
2. **间距自动**：内部的 `KaKbd` 会自动添加适当间距
3. **灵活内容**：除了 `KaKbd` 外，也可以放入其他内容（如分隔符）
