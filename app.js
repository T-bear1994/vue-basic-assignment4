const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      visibleOrHidden: 'visible',
      color: ''
    }
  },
  methods: {
    toggleVisible() {
      if (this.visibleOrHidden === 'visible') {
        this.visibleOrHidden = 'hidden';
      } else if (this.visibleOrHidden === 'hidden') {
        this.visibleOrHidden = 'visible';
      }
    }
  }
});

app.mount('#assignment');