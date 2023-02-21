---
lang: zh-CN
title: 资源包制作入门
icon: list
---

# 资源包制作入门

你可以在 Phigrim 中套用自己的游戏按键、音效、粒子、打击音效、判定线等素材，可以使用由社区提供的开放资源包，也可以制作您自己资源包，本文档将说明制作方法。

## 结构

### 基础资源包

资源包为 Zip 格式，后缀为 .pap 的压缩文件，如下：

```files:no-line-numbers
└─ phigrim_offcial.pap         
	├─ notes
	│  ├─ Tap.png 
	│  ├─ Drag.png
	│  ├─ Flick.png
	│  └─ Hold0.png
	├─ sounds       
	│  ├─ Tap.ogg   
	│  ├─ Drag.ogg
	│  ├─ Flick.ogg
	│  ├─ Hold.ogg  
	└─ config.ts
```
这是一个最基础的 .pap ( Phigrim Assets Package ) 格式的资源文件，拥有所有的必须选项。除了上述文件，您还可以加入一些其他文件。
::: warning 注意
若不包含所需文件，将会使用设置中的默认选项。
:::

### 配置文件

配置文件名是为 config.ts 的 TypeScript 文件，由半角英文字符进行分割，编码为 utf-8 ，示例如下：

```typescript

packageName: "Phigrim Assets Package",
author: "Phigrim Arts", 
isFrameSequence: true, // 启用序列帧模式
hitFxFrameCounts: 30, // 帧序列数量
hitFxDuration: 1, // 播放时间 (float/s)
holdAtlas: [50, 50], // Hold 音符头尾的 px 数量 (int/top + int/bottom)
holdAtlasHL: [50, 110], // HoldHL 音符头尾的 px 数量 (int/top + int/bottom)
holdRepeat: false, // Hold 音符的中间部分是否采用重复式拉伸
holdCompact: false, // Hold 音符的中间部分是否与头尾分离

```

您可以在[资源文件](further.md#配置文件编辑)中查看详细选项。
::: warning 注意
若您的资源包不包含config.txt，将会抛出错误。
:::



