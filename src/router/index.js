import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import InvoiceDetails from '../views/InvoiceDetails.vue';
import AddInvoice from '../views/AddInvoice.vue';
import EditInvoice from '../views/EditInvoice.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/details/:invoiceId',
    name: 'Invoice Details',
    component: InvoiceDetails,
    meta: {
      title: 'Details',
    },
  },
  {
    path: '/new-invoice',
    name: 'Add Invoice',
    component: AddInvoice,
    meta: {
      title: 'Add Invoice',
    },
  },
  {
    path: '/edit-invoice/:invoiceId',
    name: 'Edit Invoice',
    component: EditInvoice,
    meta: {
      title: 'Edit Invoice',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `Invoice Manager | ${to.meta.title}`;
  next();
});

export default router;
