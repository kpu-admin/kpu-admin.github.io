---
url: /components/ka-icon-picker.md
---
# KaIconPicker 图标选择器组件

从 Iconify 图标库中选择图标的选择器组件，支持搜索和分类浏览。

## 使用场景

* 菜单图标配置
* 按钮图标选择
* 表单字段图标
* 标签页图标
* 导航图标设置
* 状态图标配置

## Props

### Model

| 名称 | 类型 | 说明 |
|------|------|------|
| `modelValue` | `string` | 选中的图标名称 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 自定义触发器，slot props: `{ icon: string }` |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <KaIconPicker v-model="icon" />
</template>
```

### 基础图标选择

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <KaIconPicker v-model="icon" />
</template>
```

### 表单中的图标选择

```vue
<script setup lang="ts">
const form = ref({
  name: '',
  icon: '',
})
</script>

<template>
  <form class="space-y-4">
    <KaInput v-model="form.name" label="名称" />
    <KaLabel label="图标">
      <KaIconPicker v-model="form.icon" />
    </KaLabel>
  </form>
</template>
```

### 自定义触发按钮

```vue
<script setup lang="ts">
const icon = ref('i-lucide:star')
</script>

<template>
  <KaIconPicker v-model="icon">
    <template #default="{ icon }">
      <KaButton variant="outline">
        <KaIcon :name="icon || 'i-lucide:icon'" class="mr-2" />
        {{ icon || '选择图标' }}
      </KaButton>
    </template>
  </KaIconPicker>
</template>
```

### 菜单图标选择

```vue
<script setup lang="ts">
const menuItem = ref({
  name: '用户管理',
  icon: 'i-lucide:users',
  path: '/user',
})
</script>

<template>
  <KaCard title="菜单配置">
    <div class="space-y-4">
      <KaInput v-model="menuItem.name" label="菜单名称" />
      <KaInput v-model="menuItem.path" label="路由路径" />
      <KaLabel label="菜单图标">
        <KaIconPicker v-model="menuItem.icon" />
      </KaLabel>
    </div>
  </KaCard>
</template>
```

### 按钮图标选择

```vue
<script setup lang="ts">
const buttonConfig = ref({
  text: '保存',
  icon: 'i-lucide:save',
})
</script>

<template>
  <div class="space-y-4">
    <KaInput v-model="buttonConfig.text" label="按钮文字" />
    <KaLabel label="按钮图标">
      <KaIconPicker v-model="buttonConfig.icon" />
    </KaLabel>
    
    <!-- 预览 -->
    <KaPreview>
      <KaButton>
        <KaIcon :name="buttonConfig.icon" class="mr-2" />
        {{ buttonConfig.text }}
      </KaButton>
    </KaPreview>
  </div>
</template>
```

### 带图标的标签选择

```vue
<script setup lang="ts">
const tabs = ref([
  { label: '用户', icon: 'i-lucide:user', value: 'user' },
  { label: '角色', icon: 'i-lucide:shield', value: 'role' },
  { label: '权限', icon: 'i-lucide:key', value: 'permission' },
])
</script>

<template>
  <div class="space-y-4">
    <div v-for="(tab, index) in tabs" :key="index" class="flex gap-2 items-center">
      <KaIconPicker v-model="tabs[index].icon" />
      <KaInput v-model="tabs[index].label" class="flex-1" />
    </div>
  </div>
</template>
```

### 清空图标

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <div class="space-y-2">
    <KaIconPicker v-model="icon" />
    <KaButton variant="outline" size="sm" @click="icon = ''">
      <KaIcon name="i-lucide:x" class="mr-2" />
      清除图标
    </KaButton>
  </div>
</template>
```

### 动态表单图标

```vue
<script setup lang="ts">
const fields = ref([
  { label: '字段 1', icon: 'i-lucide:text' },
  { label: '字段 2', icon: 'i-lucide:number' },
])

function addField() {
  fields.value.push({ label: '', icon: '' })
}
</script>

<template>
  <div class="space-y-4">
    <div v-for="(field, index) in fields" :key="index" class="flex gap-2 items-start">
      <KaIconPicker v-model="field.icon" />
      <KaInput v-model="field.label" class="flex-1" />
      <KaButton variant="ghost" size="icon" @click="fields.splice(index, 1)">
        <KaIcon name="i-lucide:trash" />
      </KaButton>
    </div>
    <KaButton variant="outline" @click="addField">
      <KaIcon name="i-lucide:plus" class="mr-2" />
      添加字段
    </KaButton>
  </div>
</template>
```

## 注意事项

1. **图标格式**：选中的图标格式为 `前缀：图标名`，如 `i-lucide:home`
2. **图标来源**：图标来自项目配置的 Iconify 图标集
3. **搜索功能**：支持在弹窗内搜索图标
4. **分类浏览**：左侧显示图标集分类，右侧显示具体图标
5. **分页加载**：每个图标集分页显示，支持翻页

## 注意

使用该组件前，先执行 `pnpm run -F <app> generate:icons` 命令，并按照指引完成操作后，图标选择器才能正常显示需要的图标集。
