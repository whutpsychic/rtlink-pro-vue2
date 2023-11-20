import Vue from 'vue';
import 'element-ui/lib/theme-chalk/icon.css';
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import { InputNumber } from 'element-ui';
import 'element-ui/lib/theme-chalk/input-number.css';
import { Select, Option } from 'element-ui';
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/option.css';
import { Collapse } from 'element-ui';
import 'element-ui/lib/theme-chalk/collapse.css';
import { Alert } from 'element-ui';
import 'element-ui/lib/theme-chalk/alert.css';
import { Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/dialog.css';
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/pagination.css';


Vue.use(Button)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)
Vue.use(Collapse)
Vue.use(Alert)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$ELEMENT = { size: 'small' };