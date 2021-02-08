import Vue from "vue";

Vue.filter("duration", value => {
    const minutes = Math.floor(value / 60);          
    const seconds = value % 60;
    const mm = minutes < 10 ? `0${minutes}` : minutes;
    const ss = seconds < 10 ? `0${seconds}` : seconds;
    return `${mm}:${ss}`;
});

Vue.filter("numFormatted", value => {
    return new Intl.NumberFormat().format(value)
});

// to set :title attribut propperly on artistsElement.vue
Vue.filter("fans", value => {
    return value + ' fans'
})