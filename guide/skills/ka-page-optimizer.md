---
url: /guide/skills/ka-page-optimizer.md
---
# ka-page-optimizer

## 适用场景

* 页面结构太乱、风格不统一
* 页面里有大量原生 HTML 或重复自定义实现
* 希望用框架内建 `Ka*` 组件替换现有实现

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 需要优化的页面文件
* 希望替换或优化的内容
* 是否要求不改业务逻辑

示例：

```text
在 example 应用里优化用户列表页。
把原生按钮、搜索区域和弹窗替换成 Fa 组件，不要改业务逻辑。
```

## 结果

通常会修改已有页面文件，例如：

* `apps/<app>/src/views/.../*.vue`

常见结果包括：

* 用 `KaButton`、`KaCard`、`KaModal`、`KaPagination` 等替换现有实现
* 优化页面结构与样式
* 保留原有业务逻辑
