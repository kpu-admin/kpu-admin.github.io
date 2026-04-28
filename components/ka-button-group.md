---
url: /components/ka-button-group.md
---
# KaButtonGroup 按钮组

将多个按钮组合在一起的容器组件，支持水平/垂直排列和分割线。

## 使用场景

* 将多个按钮组合在一起的容器组件，支持水平/垂直排列和分割线。
* 常见用法：垂直排列、带分割线、工具栏按钮组、垂直菜单。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| orientation | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| separator | 是否显示分割线 | `boolean` | `false` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 KaButton 组件 |

## 示例

### 基础用法

```vue
<template>
  <KaButtonGroup>
    <KaButton>
      <KaIcon name="i-mdi:eye" />
      查看详情
    </KaButton>
    <KaButton>
      <KaIcon name="i-mdi:pencil" />
      编辑
    </KaButton>
    <KaButton>
      <KaIcon name="i-mdi:delete" />
      删除
    </KaButton>
  </KaButtonGroup>
</template>
```

### 垂直排列

```vue
<template>
  <KaButtonGroup orientation="vertical">
    <KaButton>操作 1</KaButton>
    <KaButton>操作 2</KaButton>
    <KaButton>操作 3</KaButton>
  </KaButtonGroup>
</template>
```

### 带分割线

```vue
<template>
  <KaButtonGroup :separator="true">
    <KaButton variant="outline">复制</KaButton>
    <KaButton variant="outline">粘贴</KaButton>
    <KaButton variant="outline">剪切</KaButton>
  </KaButtonGroup>
</template>
```

### 工具栏按钮组

```vue
<template>
  <KaButtonGroup>
    <KaButton variant="ghost" size="icon">
      <KaIcon name="i-lucide:bold" />
    </KaButton>
    <KaButton variant="ghost" size="icon">
      <KaIcon name="i-lucide:italic" />
    </KaButton>
    <KaButton variant="ghost" size="icon">
      <KaIcon name="i-lucide:underline" />
    </KaButton>
  </KaButtonGroup>
</template>
```

### 垂直菜单

```vue
<template>
  <KaButtonGroup orientation="vertical" :separator="true" class="w-48">
    <KaButton variant="ghost" class="justify-start">
      <KaIcon name="i-heroicons:user" class="mr-2" />
      个人资料
    </KaButton>
    <KaButton variant="ghost" class="justify-start">
      <KaIcon name="i-heroicons:cog" class="mr-2" />
      账户设置
    </KaButton>
    <KaButton variant="ghost" class="justify-start">
      <KaIcon name="i-heroicons:shield-check" class="mr-2" />
      安全选项
    </KaButton>
  </KaButtonGroup>
</template>
```

### 与其他组件组合

```vue
<template>
  <KaButtonGroup>
    <KaSelect v-model="action" class="w-32">
      <KaSelectOption value="export">导出</KaSelectOption>
      <KaSelectOption value="import">导入</KaSelectOption>
    </KaSelect>
    <KaButton>执行</KaButton>
  </KaButtonGroup>
</template>
```

### 嵌套按钮组

```vue
<template>
  <KaButtonGroup>
    <KaButton>左侧</KaButton>
    <KaButtonGroup :separator="true">
      <KaButton>嵌套 1</KaButton>
      <KaButton>嵌套 2</KaButton>
    </KaButtonGroup>
    <KaButton>右侧</KaButton>
  </KaButtonGroup>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
