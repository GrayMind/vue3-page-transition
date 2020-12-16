import { resolve } from "path";

module.exports = {
  alias: {
    // https://github.com/vitejs/vite/blob/097504013146d5520281107732239cd96eba08c7/src/node/config.ts#L109
    "/@/": resolve(__dirname, "src"),
  },
};