---
lang: zh-CN
title: 按键设计与使用
icon: list
description: Phigrim官方美术文档
---

# 按键设计与使用

你可以在 Phigrim 中套用自己的游戏按键、音效、粒子、打击音效、判定线等素材，可以使用由社区提供的开放资源包，也可以制作您自己资源包，本文档将说明制作方法。

## 结构

### 基础资源文件

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
若不包含上述任意必须文件，将会使用设置中的默认选项。
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

配置文件基本选项：

#### packageName
- 类型：`string`
- 必填：`true`
- 默认值：`"PhigrimAssetsPackage"`
```typescript
packageName: "PhigrimAssetsPackage"
```
资源包的显示名称（在游戏设置中）

#### author
- 类型：`string`
- 必填：`true`
- 默认值：`"Phigrim Arts"`
```typescript
author: "Phigrim Arts"
```
资源包的作者名称

#### isFrameSequence
- 类型：`boolean`
- 必填：`true`
- 默认值：`true`
```typescript
isFrameSequence: true
```
::: tip
当此选项为`False`时，将开启[hitFx](#hitFx)选项，如无该选项将会报错
:::

#### hitFx
- 类型：`int`
- 必填：`true`
- 默认值：`true`
```typescript
hitFx: [5, 6]
```
行、列裁切数量

#### hitFxFrameCounts
- 类型：`boolean`
- 必填：`true`
- 默认值：`true`
```typescript
hitFxFrameCounts: 30
```
行、列裁切数量


::: warning 注意
若您的资源包不包含config.txt，将会抛出报错。
:::

### 拓展资源文件
您可以使用拓展资源文件进行更多设定，可添加文件如下

| notes文件夹的拓展文件 | 描述           | sounds文件夹的拓展文件 | 描述             |
|:--------------|:-------------|:---------------|:---------------|
| TapHL.png     | 高亮的`Tap`音符   | TapHL.ogg      | 高亮的`Tap`音符音效   |
| DragHL.png    | 高亮的`Drag`音符  | DragHL.ogg     | 高亮的`Drag`音符音效  |
| FlickHL.png   | 高亮的`Flick`音符 | FlickHL.ogg    | 高亮的`Flick`音符音效 |
| HoldHL.png    | 高亮的`Hold`音符  | HoldHL.ogg     | 高亮的`Hold`音符音效  |

