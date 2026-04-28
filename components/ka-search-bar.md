---
url: /components/ka-search-bar.md
---
# KaSearchBar 搜索栏组件

可折叠的搜索区域容器组件，用于表单筛选条件区域。

## 使用场景

* 列表页面筛选区
* 高级搜索表单
* 数据查询条件
* 报表筛选选区
* 可折叠的表单区域

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `showToggle` | `boolean` | `true` | 是否显示折叠按钮 |
| `background` | `boolean` | `false` | 是否显示背景色 |
| `fold` | `boolean` | `false` | 折叠状态（支持 v-model） |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 搜索表单内容，slot props: `{ fold: boolean, toggle: () => void }` |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `toggle` | `value: boolean` | 折叠状态变化时触发 |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const fold = ref(true)
</script>

<template>
  <KaSearchBar v-model:fold="fold">
    <template #default="{ fold, toggle }">
      <div class="flex gap-4">
        <KaInput placeholder="关键词" />
        <KaButton>搜索</KaButton>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 基础搜索栏

```vue
<script setup lang="ts">
const fold = ref(true)
</script>

<template>
  <KaSearchBar v-model:fold="fold">
    <template #default>
      <div class="flex flex-wrap gap-4">
        <KaInput placeholder="用户名" class="w-48" />
        <KaInput placeholder="邮箱" class="w-48" />
        <KaSelect placeholder="状态" :options="[]" class="w-48" />
        <div class="flex gap-2">
          <KaButton>搜索</KaButton>
          <KaButton variant="outline">重置</KaButton>
        </div>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 多行筛选表单

```vue
<script setup lang="ts">
const fold = ref(true)
</script>

<template>
  <KaSearchBar v-model:fold="fold">
    <template #default>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KaInput label="用户名" placeholder="请输入用户名" />
        <KaInput label="手机号" placeholder="请输入手机号" />
        <KaInput label="邮箱" placeholder="请输入邮箱" />
        <KaSelect label="部门" :options="[]" placeholder="请选择部门" />
        <KaSelect label="角色" :options="[]" placeholder="请选择角色" />
        <KaSelect label="状态" :options="[]" placeholder="请选择状态" />
        <KaInput label="创建时间" type="date" />
        <KaInput label="更新时间" type="date" />
      </div>
      <div class="flex gap-2 mt-4">
        <KaButton>搜索</KaButton>
        <KaButton variant="outline">重置</KaButton>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 隐藏折叠按钮

```vue
<template>
  <KaSearchBar :show-toggle="false">
    <template #default>
      <div class="flex gap-4">
        <KaInput placeholder="搜索关键词" class="flex-1" />
        <KaButton>搜索</KaButton>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 带背景色

```vue
<template>
  <KaSearchBar background>
    <template #default>
      <div class="flex gap-4">
        <KaInput placeholder="关键词" />
        <KaButton>搜索</KaButton>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 监听折叠状态

```vue
<script setup lang="ts">
const fold = ref(true)

function handleToggle(value: boolean) {
  console.log('折叠状态:', value)
  // 可以根据折叠状态做其他操作
}
</script>

<template>
  <KaSearchBar v-model:fold="fold" @toggle="handleToggle">
    <template #default>
      <div class="flex gap-4">
        <KaInput placeholder="关键词" />
        <KaButton>搜索</KaButton>
      </div>
    </template>
  </KaSearchBar>
</template>
```

### 列表页面搜索栏

```vue
<script setup lang="ts">
import { useLoading } from '@/composables'

const fold = ref(true)
const searchForm = ref({
  keyword: '',
  status: '',
  dateRange: [],
})

const { loading, startLoading, stopLoading } = useLoading()

function handleSearch() {
  startLoading()
  // 调用 API 获取数据
  setTimeout(stopLoading, 1000)
}

function handleReset() {
  searchForm.value = {
    keyword: '',
    status: '',
    dateRange: [],
  }
  handleSearch()
}
</script>

<template>
  <KaSearchBar v-model:fold="fold">
    <template #default>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KaInput v-model="searchForm.keyword" placeholder="关键词" />
        <KaSelect v-model="searchForm.status" :options="[
          { label: '启用', value: '1' },
          { label: '禁用', value: '0' }
        ]" placeholder="状态" />
        <div class="flex gap-2">
          <KaButton :loading @click="handleSearch">搜索</KaButton>
          <KaButton variant="outline" @click="handleReset">重置</KaButton>
        </div>
      </div>
    </template>
  </KaSearchBar>
  
  <!-- 列表内容 -->
  <KaPageMain title="数据列表">
    <!-- 表格内容 -->
  </KaPageMain>
</template>
```

### 高级筛选

```vue
<script setup lang="ts">
const fold = ref(true)
const showAdvanced = ref(false)
</script>

<template>
  <KaSearchBar v-model:fold="fold">
    <template #default>
      <div class="space-y-4">
        <!-- 基础筛选 -->
        <div class="flex gap-4">
          <KaInput placeholder="关键词搜索" class="flex-1" />
          <KaButton>搜索</KaButton>
        </div>
        
        <!-- 高级筛选 -->
        <div v-if="!fold" class="grid grid-cols-4 gap-4 pt-4 border-t">
          <KaInput label="创建时间" type="date" />
          <KaInput label="更新时间" type="date" />
          <KaSelect label="分类" :options="[]" />
          <KaSelect label="标签" :options="[]" />
        </div>
      </div>
    </template>
  </KaSearchBar>
</template>
```

## 注意事项

1. **折叠内容**：当 `fold` 为 `true` 时，内容区域会被折叠（通过 slot 控制显示逻辑）
2. **折叠按钮**：默认在底部显示折叠/展开按钮
3. **双向绑定**：`fold` 支持 `v-model` 双向绑定
4. **内容控制**：需要在 slot 内根据 `fold` 值控制内容的显示
