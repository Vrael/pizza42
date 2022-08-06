import { ProductService } from './../app/products/product.service';

export const environment = {
  production: true,
  baseUrl: 'http://localhost',
  endpoints: {
    account: { path: 'auth/realms/basketmaster/account/?referrer=teams-frontend' },
  },
  providers: [
    { provide: ProductService, useClass: ProductService }
  ]
};
