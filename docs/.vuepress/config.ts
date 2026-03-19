import viteBundler from "@vuepress/bundler-vite"
import { defineUserConfig } from "vuepress"
import { head } from "./configs/index.js"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/",
  head,
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "高塔的传说"
    },
    "/en/": {
      lang: "en-US",
      title: "The Lore of the tower"
    }
  },
  bundler: viteBundler(),
  theme: theme,
})
