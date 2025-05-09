# 用户偏好设置

如果希望将框架的部分应用配置项暴露给用户，让用户可以自行设置，那么可以使用用户偏好设置功能。

## 开启

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  userPreferences: {
    /**
     * 是否开启用户偏好设置
     * @默认值 `false`
     */
    enable: true,
  },
}
```

![](/preferences.gif){data-zoomable}

## 定制偏好设置内容

然后打开 `/src/store/modules/user.ts` 文件，你可以在文件里进一步定制用户偏好设置里的内容：

```ts
// 框架已将可提供给用户配置的选项提取出来，请勿新增其他选项，不需要的选项可以在这里注释掉
const preferences = ref<Settings.all>({
  app: {
    colorScheme: settingsDefault.app.colorScheme,
    theme: settingsDefault.app.theme,
    enableProgress: settingsDefault.app.enableProgress,
  },
  ...
})
```

如果仔细对比，会发现这里的配置项并不是框架的完整应用配置，这是因为有部分配置项并不适合暴露给用户。比如 `userPreferences.enable` 这个配置项就是用来控制是否开启用户偏好设置的，如果开启了用户偏好设置，那么这个配置项就不应该再暴露给用户了，否则用户就可以关闭用户偏好设置了，这样就没有意义了。再比如 `app.routeBaseOn` 这个配置项是用来控制路由数据来源的，修改它会直接影响代码的调整，所以也是不能暴露给用户的。

所以请勿新增这里的配置项，你需要做的就是将不需要暴露给用户的配置项注释掉即可。

## 处理请求

用户偏好设置默认存储在浏览器本地 localStorage 里，如果需要将数据存储到服务器，可以通过 `userPreferences.storageTo` 配置项来实现，具体配置如下：

```ts {2-9}
const globalSettings: Settings.all = {
  userPreferences: {
    /**
     * 存储位置
     * @默认值 `'local'` 本地存储
     * @可选值 `'server'` 服务器存储
     */
    storageTo: 'server',
  },
}
```

然后到 `/src/api/modules/user.ts` 中找到 `preferences()` 和 `preferencesEdit()` 这两个函数，并分别修改这两个函数的请求地址。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::
