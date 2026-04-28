---
url: /components/ka-text-highlight.md
---
# KaTextHighlight 文字高亮

带有渐变背景展开动画的文字高亮组件。

## 使用场景

* 带有渐变背景展开动画的文字高亮组件。
* 常见用法：自定义动画、方向控制、渐变色高亮、多段高亮。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| delay | 动画延迟 (ms) | `number` | `0` |
| duration | 动画持续时间 (ms) | `number` | `2000` |
| from | 高亮动画触发方向 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| textEndColor | 文字最终颜色 | `string` | `'inherit'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，要高亮的文字 |

## 示例

### 基础用法

```vue
<template>
  <h1>
    李云龙：你<KaTextHighlight class="from-indigo-300 to-purple-300 bg-gradient-to-r">
      他娘的
    </KaTextHighlight>还真是个天才！
  </h1>
</template>
```

### 自定义动画

```vue
<template>
  <KaTextHighlight
    :delay="500"
    :duration="1500"
    text-end-color="#fbbf24"
    class="from-yellow-200 to-orange-200 bg-gradient-to-r"
  >
    高亮文字
  </KaTextHighlight>
</template>
```

### 方向控制

支持从四个方向触发高亮动画，默认从左侧开始。

```vue
<template>
  <KaTextHighlight from="left" class="from-blue-200 to-cyan-200 bg-gradient-to-r">
    从左侧展开
  </KaTextHighlight>
  <KaTextHighlight from="right" class="from-pink-200 to-rose-200 bg-gradient-to-r">
    从右侧展开
  </KaTextHighlight>
  <KaTextHighlight from="top" class="from-emerald-200 to-lime-200 bg-gradient-to-b">
    从顶部展开
  </KaTextHighlight>
  <KaTextHighlight from="bottom" class="from-amber-200 to-orange-200 bg-gradient-to-b">
    从底部展开
  </KaTextHighlight>
</template>
```

### 渐变色高亮

```vue
<template>
  <p class="text-lg">
    这是一段<KaTextHighlight class="from-blue-200 to-cyan-200 bg-gradient-to-r">
      重点内容
    </KaTextHighlight>，请注意。
  </p>
</template>
```

### 多段高亮

```vue
<template>
  <div class="space-y-2">
    <p>
      <KaTextHighlight class="from-green-200 to-emerald-200 bg-gradient-to-r">
        绿色高亮
      </KaTextHighlight>
    </p>
    <p>
      <KaTextHighlight class="from-pink-200 to-rose-200 bg-gradient-to-r">
        粉色高亮
      </KaTextHighlight>
    </p>
    <p>
      <KaTextHighlight class="from-amber-200 to-orange-200 bg-gradient-to-r">
        橙色高亮
      </KaTextHighlight>
    </p>
  </div>
</template>
```

### 带延迟动画

```vue
<template>
  <h1 class="text-2xl">
    <KaTextHighlight :delay="0" :duration="1000" class="from-red-200 to-red-300 bg-gradient-to-r">
      第一步
    </KaTextHighlight>
  </h1>
  <h2 class="text-xl">
    <KaTextHighlight :delay="500" :duration="1000" class="from-blue-200 to-blue-300 bg-gradient-to-r">
      第二步
    </KaTextHighlight>
  </h2>
  <h3 class="text-lg">
    <KaTextHighlight :delay="1000" :duration="1000" class="from-green-200 to-green-300 bg-gradient-to-r">
      第三步
    </KaTextHighlight>
  </h3>
</template>
```

### 四向高亮

```vue
<template>
  <KaTextHighlight from="left" class="from-blue-200 to-cyan-200 bg-gradient-to-r">
    左
  </KaTextHighlight>
  <KaTextHighlight from="right" class="from-pink-200 to-rose-200 bg-gradient-to-r">
    右
  </KaTextHighlight>
  <KaTextHighlight from="top" class="from-emerald-200 to-lime-200 bg-gradient-to-b">
    上
  </KaTextHighlight>
  <KaTextHighlight from="bottom" class="from-amber-200 to-orange-200 bg-gradient-to-b">
    下
  </KaTextHighlight>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
