---
url: /components/basic/KaToast.md
---
# KaToast 轻提示

全局轻提示组件，用于展示操作反馈消息。

## 使用场景

* 表单提交反馈
* 操作成功/失败提示
* 删除确认反馈
* 上传/下载进度提示
* 系统通知
* 数据保存提示

## Props

无（通过 `useKaToast()` 函数调用配置）

## API

### useKaToast 方法

| 方法 | 说明 |
|------|------|
| `useKaToast()(message)` | 普通提示 |
| `useKaToast().success(message)` | 成功提示 |
| `useKaToast().error(message)` | 错误提示 |
| `useKaToast().warning(message)` | 警告提示 |
| `useKaToast().info(message)` | 信息提示 |
| `useKaToast().loading(message)` | 加载提示 |
| `useKaToast().promise(promise, options)` | Promise 提示 |

## 注意事项

1. **全局组件**：`<KaToast />` 需要在应用根组件中添加一次
2. **自动消失**：提示默认 3 秒后自动消失
3. **堆叠显示**：多个提示会堆叠显示
4. **可点击关闭**：每个提示都可以手动点击关闭
