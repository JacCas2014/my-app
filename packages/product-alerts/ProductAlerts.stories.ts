import { ProductAlertsComponent } from './product-alerts.component';
export default {
  // this is the title for the sidebar of the Storybook app
  title: 'Product Alerts',
};

export const Default = () => ({
  // this is the component itself
  component: ProductAlertsComponent,
  props: {
    product: {
      id: 2,
      name: 'Phone Mini',
      price: 701,
      description: 'A great phone with one of the best cameras'
    },
  },
});
