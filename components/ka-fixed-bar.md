---
url: /components/ka-fixed-bar.md
---
# KaFixedBar 固定栏

固定在页面顶部或底部的栏位组件，适用于展示操作栏、筛选条件等内容。

## 使用场景

* 固定在页面顶部或底部的栏位组件，适用于展示操作栏、筛选条件等内容。
* 常见用法：固定在顶部、固定在底部、顶部筛选栏、底部操作栏。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| position | 固定位置 | `'top' \| 'bottom'` | `required` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，固定栏内容 |

## 示例

### 固定在顶部

```vue
<template>
  <KaFixedBar position="top">
    <div class="flex items-center gap-4">
      <KaInput v-model="keyword" placeholder="搜索..." />
      <KaButton>搜索</KaButton>
    </div>
  </KaFixedBar>
</template>
```

### 固定在底部

```vue
<template>
  <KaFixedBar position="bottom">
    <div class="flex justify-end gap-2">
      <KaButton variant="outline">取消</KaButton>
      <KaButton type="primary">确认提交</KaButton>
    </div>
  </KaFixedBar>
</template>
```

### 顶部筛选栏

```vue
<script setup lang="ts">
const filters = ref([50])
</script>

<template>
  <KaFixedBar position="top">
    <div class="flex items-center gap-4">
      <span class="text-sm font-bold">透明度：</span>
      <KaSlider v-model="filters" :min="0" :max="100" />
      <span class="text-sm w-12">{{ filters[0] }}%</span>
    </div>
  </KaFixedBar>

  <!-- 页面内容 -->
  <div class="pt-20">
    <div v-for="i in 50" :key="i" class="h-24 border-b">
      内容 {{ i }}
    </div>
  </div>
</template>
```

### 底部操作栏

```vue
<template>
  <KaPageMain title="订单详情">
    <div v-for="i in 30" :key="i" class="py-4 border-b">
      订单项 {{ i }}
    </div>
  </KaPageMain>

  <KaFixedBar position="bottom">
    <div class="flex items-center justify-between w-full">
      <div>
        <span class="text-sm text-muted-foreground">合计：</span>
        <span class="text-xl font-bold text-primary">¥ 1,234.00</span>
      </div>
      <div class="flex gap-2">
        <KaButton variant="outline">联系客服</KaButton>
        <KaButton type="primary">立即支付</KaButton>
      </div>
    </div>
  </KaFixedBar>
</template>
```

### 顶部搜索栏

```vue
<script setup lang="ts">
const keyword = ref('')
const searchHistory = ref([])
</script>

<template>
  <KaFixedBar position="top">
    <div class="flex items-center gap-2">
      <KaInput
        v-model="keyword"
        placeholder="输入关键词搜索"
        class="w-64"
        @enter="search"
      />
      <KaButton @click="search">
        <KaIcon name="i-heroicons:magnifying-glass" />
      </KaButton>
    </div>
  </KaFixedBar>

  <div class="pt-16">
    <!-- 搜索结果列表 -->
  </div>
</template>
```

### 底部表单提交栏

```vue
<script setup lang="ts">
const formData = ref({})
const isSubmitting = ref(false)

async function submit() {
  isSubmitting.value = true
  try {
    await saveData(formData.value)
    faToast.success('保存成功')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <KaPageMain title="编辑资料">
    <div class="space-y-4 pb-20">
      <KaFormItem label="姓名">
        <KaInput v-model="formData.name" />
      </KaFormItem>
      <KaFormItem label="邮箱">
        <KaInput v-model="formData.email" />
      </KaFormItem>
      <!-- 更多表单项 -->
    </div>
  </KaPageMain>

  <KaFixedBar position="bottom">
    <div class="flex justify-end gap-2">
      <KaButton variant="outline" @click="reset">重置</KaButton>
      <KaButton
        type="primary"
        :loading="isSubmitting"
        @click="submit"
      >
        保存修改
      </KaButton>
    </div>
  </KaFixedBar>
</template>
```

## 注意事项

1. 固定栏会自动计算侧边栏宽度并适配
2. 顶部固定栏在静态顶栏模式下会跟随滚动
3. 移动端模式下全宽显示
4. 建议给内容区域添加对应的 padding 避免遮挡
