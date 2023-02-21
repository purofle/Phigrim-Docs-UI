import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
    navbar:[
        {
            text: '设计与配置',
            icon: 'lightbulb',
            children: ['../UI/Illustration.md', '../UI/Tachie.md','../UI/basic.md'],
        },
        {
            text: '谱面拓展',
            icon: 'list',
            children: ['/Chart/AssetPackageDesign/basic.md', '/Chart/AssetPackageDesign/further.md'],
        },
        {
            text: '关于我们',
            icon: 'compass',
            children: ['../UI_Dev/Illustration.md', '../UI_Dev/Tachie.md','../UI_Dev/basic.md'],
        },
    ],
    navbarAutoHide:"mobile",
    repo:"phigrim/Phigrim-Docs",
    pure: true,
    navbarIcon:true,
    iconAssets: "fontawesome",

    logo: "/Logo/Phigrim_Docs.png",
    sidebar: [

        {
            text: "资源包设计与应用",
            icon: "lightbulb",
            prefix: "/Chart/AssetPackageDesign/",
            collapsible: true,
            activeMatch: "^/Chart/AssetPackageDesign/$",
            children: [
                "basic.md",
                "further.md"
            ],
        },
        {
            text: "谱面拓展与配置",
            icon: "lightbulb",
            prefix: "/UI/",
            collapsible: true,
            children: [
                "Illustration.md",
                "basic.md",
                "Tachie.md"
            ],
        },
    ],
});