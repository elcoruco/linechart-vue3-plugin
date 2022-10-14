import Linechart from "./LinechartView.vue"
export default {
  install : (app, options) => {
    app.component("gf-linechart", Linechart);
  }
}