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
      title: "传说"
    },
    "/en/": {
      lang: "en-US",
      title: "传说"
    }
  },
  bundler: viteBundler(),
  theme: theme
})
