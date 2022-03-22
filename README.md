# 浏览器插件指南

目录

- [什么是浏览器插件](#什么是浏览器插件)
- [如何安装浏览器插件](#如何安装浏览器插件)
- [浏览器插件推荐](#浏览器插件推荐)

## 什么是浏览器插件

浏览器插件也被称为浏览器附加组件（Browser-Extensions），是一组可以添加到浏览器中以增强其功能的软件组件。

浏览器插件就是可定制浏览体验的小型软件程序，让用户可以根据个人需要或偏好来定制浏览器。简而言之，插件就是可以让你的浏览器用起来更加方便顺手的工具。

插件之于浏览器就像 app 之于手机，exe 软件之于 windows 一样，有了插件的浏览器可以发挥出更多更好的功能。

## 如何安装浏览器插件

要安装浏览器插件可以去对应浏览器的官方插件市场下载

[![Edge 外接程序 BETA](Photo/Badge/edge.png)](https://microsoftedge.microsoft.com/)
[![Chrome 网上应用店](Photo/Badge/chrome.png)](https://chrome.google.com/webstore/)
[![Firefox 附加组件](Photo/Badge/firefox.png)](https://addons.mozilla.org/zh-CN/firefox/)

也可以去第三方网站直接下载插件安装进浏览器 后缀名分别为 .crx / .xpi

<details>
<summary>如何给浏览器安装第三方插件</summary>

Edge 浏览器安装第三方插件比较简单

- 打开扩展程序页面 [edge://extensions](edge://extensions/) [chrome://extensions](chrome://extensions)
- 或是通过点击浏览器右上角退出下面的  **设置与其他** - **扩展**- **管理扩展** 打开

![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions.png#gh-light-mode-only)
![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions-dark.png#gh-dark-mode-only)
![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions2-manage.png#gh-light-mode-only)
![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions2-manage-dark.png#gh-dark-mode-only)
- 打开 `开发人员模式` 和 `允许来自其他应用商店的扩展`
  

![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions-Dev.png#gh-light-mode-only)
![Settings and others](Photo/Settings/Settings-and-others-Browser-Extensions-Dev-dark.png#gh-dark-mode-only)

- 将 .crx 文件**直接拖入扩展页面**即可安装

---

Chrome 安装第三方扩展或者 Edge 的另一种安装方式

>Chrome 21.x 系列增加了对扩展插件安装的限制, 自 Chrome 21.x 开始默认只允许从 Chrome Web Store （Chrome 网上应用店）安装扩展、应用及脚本

- 把下载后的`.crx`扩展名的离线 Chrome 插件的文件扩展名改成`.zip`或者`.rar`。
- 右键点击该文件，并使用压缩软件（如7z、winrar、好压、360压缩等）对该压缩文件进行解压，并保存到系统的一个任意文件夹下。解压成功以后，该 Chrome 插件就会以文件夹的形式存在于操作系统的某一个目录下面。***(注意，文件夹位置变动会导致插件失效)***
- 打开扩展程序页面 [edge://extensions](edge://extensions/) [chrome://extensions](chrome://extensions)
- 打开 `开发者模式`
- 点击 `加载已解压的扩展程序...` 选择刚刚解压的插件文件夹的位置即可

</details>

</details>

## 浏览器插件推荐

### 脚本管理器

<details>
<summary>Tampermonkey</summary>

#### [Tampermonkey](https://www.tampermonkey.net/)

>Tampermonkey 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 Chrome, Microsoft Edge, Safari, Opera Next, 和 Firefox。

这个插件的功能是通过编写脚本对网页进行任意更改，所以成为了最受欢迎的浏览器插件之一

[Tampermonkey 使用教程](https://github.com/XTsat/Tampermonkey-Guide)

安装地址：

[![Edge 外接程序 BETA](Photo/Badge/edge.png)](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
[![Chrome 网上应用店](Photo/Badge/chrome.png)](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
[![Firefox 附加组件](Photo/Badge/firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

</details>

### 广告屏蔽插件

#### [uBlock Origin](https://github.com/gorhill/uBlock)

>一款高效的请求过滤工具：占用极低的内存和 CPU，与其他常见的过滤器相比，它能够多加载并执行上千条过滤规则。

#### AdGuard

>AdGuard 广告拦截器可有效的拦截所有网页上的所有类型的广告，甚至是在 Facebook，Youtube 以及其它网站的广告！

#### Adblock Plus

>从世界上最流行的广告拦截扩展Adblock Plus下载适用于Microsoft Edge的Adblock Plus。它是免费的、开源的。提高在线体验的质量，获得更多控制！

#### AdBlock

>AdBlock — 最佳广告拦截工具，可以拦截 YouTube、Facebook、Twitch 以及所有您喜爱的网站上的烦人广告和弹窗。
