new Vue({
  el: '#app',
  data: {
    default: '2018-10-04',
    DatePickerFormat:'yyyy-MM-dd',
    ja: vdp_translation_ja.js
  },
  components: {
    'vuejs-datepicker':vuejsDatepicker
  }
});