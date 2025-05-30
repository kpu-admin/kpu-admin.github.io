# KpuLayoutContainer 布局容器

## Props

| 属性名                                       | 说明                     | 类型               | 默认值  |
| -------------------------------------------- | ------------------------ | ------------------ | ------- |
| vertical                                     | 是否垂直布局             | `boolean`          | `false` |
| enableLeftSide                               | 是否启用左侧边栏         | `boolean`          | `true`  |
| enableRightSide                              | 是否启用右侧边栏         | `boolean`          | `true`  |
| enableTopSide                                | 是否启用顶部边栏         | `boolean`          | `true`  |
| enableBottomSide                             | 是否启用底部边栏         | `boolean`          | `true`  |
| leftSideWidth                                | 左侧边栏宽度             | `number \| string` | `300`   |
| rightSideWidth                               | 右侧边栏宽度             | `number \| string` | `300`   |
| topSideHeight                                | 顶部边栏高度             | `number \| string` | `200`   |
| bottomSideHeight                             | 底部边栏高度             | `number \| string` | `200`   |
| hideLeftSideToggle                           | 是否隐藏左侧边栏切换按钮 | `boolean`          | `false` |
| hideRightSideToggle                          | 是否隐藏右侧边栏切换按钮 | `boolean`          | `false` |
| hideTopSideToggle                            | 是否隐藏顶部边栏切换按钮 | `boolean`          | `false` |
| hideBottomSideToggle                         | 是否隐藏底部边栏切换按钮 | `boolean`          | `false` |
| class                                        | 自定义类名               | `string`           | -       |
| leftSideClass                                | 左侧边栏自定义类名       | `string`           | -       |
| rightSideClass                               | 右侧边栏自定义类名       | `string`           | -       |
| topSideClass                                 | 顶部边栏自定义类名       | `string`           | -       |
| bottomSideClass                              | 底部边栏自定义类名       | `string`           | -       |
| defaultClass                                 | 默认自定义类名           | `string`           | -       |

## Slots

| 插槽名                             | 说明           |
| ---------------------------------- | -------------- |
| default                            | 自定义默认内容 |
| leftSide                           | 自定义左侧内容 |
| rightSide                          | 自定义右侧内容 |
| topSide                            | 自定义顶部内容 |
| bottomSide                         | 自定义底部内容 |
