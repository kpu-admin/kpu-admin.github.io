---
url: /components/ka-storage-box.md
---
# KaStorageBox 储物箱

数据暂存组件，可将数据保存到本地存储，方便在复杂筛选场景中保存常用筛选条件。

## 使用场景

* 数据暂存组件，可将数据保存到本地存储，方便在复杂筛选场景中保存常用筛选条件。
* 常见用法：自定义标题、筛选条件保存、表格列配置保存、自定义触发按钮。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| uniqueKey | 唯一Key，用于账号隔离，推荐传入当前用户ID或用户名 | `string` | `required` |
| boxId | 储物箱唯一ID，用于区分其他储物箱 | `string` | `required` |
| data | 要保存的数据 | `object \| any[]` | `required` |
| title | 显示标题 | `string` | `'储物箱'` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 自定义触发器，不传则显示默认图标按钮 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| takeOut | 取出数据时触发 | `(value: object \| any[])` |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const filterData = ref({
  keyword: '',
  status: '',
  dateRange: [],
})
</script>

<template>
  <KaStorageBox :unique-key="appAccountStore.account" box-id="filterBox" :data="filterData" />
</template>
```

### 自定义标题

```vue
<template>
  <KaStorageBox
    :unique-key="appAccountStore.account"
    box-id="searchBox"
    :data="searchParams"
    title="搜索条件收藏"
  />
</template>
```

### 筛选条件保存

```vue
<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const filters = ref({
  category: 'all',
  priceRange: [0, 1000],
  inStock: true,
})

function onTakeOut(data) {
  filters.value = data
  loadProducts()
}
</script>

<template>
  <div class="flex items-center gap-4">
    <KaInput v-model="filters.keyword" placeholder="搜索商品" />
    <KaSelect v-model="filters.category">
      <KaSelectOption value="all">全部分类</KaSelectOption>
      <KaSelectOption value="electronics">电子产品</KaSelectOption>
      <KaSelectOption value="clothing">服装</KaSelectOption>
    </KaSelect>
    <KaStorageBox
      :unique-key="appAccountStore.account"
      box-id="productFilters"
      :data="filters"
      title="筛选条件"
      @take-out="onTakeOut"
    />
  </div>
</template>
```

### 表格列配置保存

```vue
<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const tableConfig = ref({
  columns: ['name', 'email', 'phone'],
  sortOrder: 'created_at',
  pageSize: 20,
})
</script>

<template>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-lg font-bold">用户列表</h2>
    <KaStorageBox
      :unique-key="appAccountStore.account"
      box-id="userTableConfig"
      :data="tableConfig"
      title="表格配置"
    />
  </div>
  <!-- 表格内容 -->
</template>
```

### 自定义触发按钮

```vue
<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const formData = ref({})
</script>

<template>
  <KaStorageBox :unique-key="appAccountStore.account" box-id="myBox" :data="formData">
    <template #default>
      <KaButton variant="outline" size="sm">
        <KaIcon name="i-heroicons:bookmark" />
        保存当前配置
      </KaButton>
    </template>
  </KaStorageBox>
</template>
```

### 推荐场景：复杂筛选

```vue
<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const searchParams = ref({
  keywords: '',
  dateFrom: '',
  dateTo: '',
  status: [],
  department: '',
})

function applyFilters(params) {
  searchParams.value = params
  fetchData()
}
</script>

<template>
  <KaCard class="p-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="font-bold">高级搜索</h3>
      <KaStorageBox
        :unique-key="appAccountStore.account"
        box-id="advancedSearch"
        :data="searchParams"
        title="搜索方案"
        @take-out="applyFilters"
      />
    </div>
    <!-- 搜索表单 -->
  </KaCard>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
