import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
    navbar:[
        {
            text: '设计与配置',
            icon: 'lightbulb',
            children: ['../UI/Illustration.md', '../UI/Tachie.md','../UI/NoteDesign.md'],
        },
        {
            text: '谱面',
            children: ['../UI/Illustration.md', '../UI/Tachie.md','../UI/NoteDesign.md'],
        },
        {
            text: '关于我们',
            icon: 'compass',
            children: ['../UI_Dev/Illustration.md', '../UI_Dev/Tachie.md','../UI_Dev/NoteDesign.md'],
        },
    ],
    navbarAutoHide:"mobile",
    repo:"phigrim/Phigrim-Docs",
    navbarIcon:true,
    iconAssets: "fontawesome",

    logo: "/Logo/Phigrim_Docs.png",
    sidebar: [

        {
            text: "界面设计与配置",
            icon: "lightbulb",
            prefix: "/UI/",
            collapsible: true,
            children: [
                "Illustration.md",
                "NoteDesign.md",
                "Tachie.md"
            ],
        },
        {
            text: "谱面拓展与配置",
            icon: "lightbulb",
            prefix: "/UI/",
            collapsible: true,
            children: [
                "Illustration.md",
                "NoteDesign.md",
                "Tachie.md"
            ],
        },
    ],
});