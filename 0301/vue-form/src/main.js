import Vue from 'vue';
import App from './App.vue';
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  ButtonGroup,
  TimePicker,
  DatePicker,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Loading,
} from 'element-ui';
Vue.use(Button)
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading.directive);
new Vue({
  el: '#app',
  render: h => h(App)
});
