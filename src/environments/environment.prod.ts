import { ProductService } from './../app/products/product.service';

export const environment = {
  production: true,
  auth: {
    domain: process.env.NG_APP_AUTH_DOMAIN,
    clientId: process.env.NG_APP_AUTH_CLIENT_ID,
    redirectUrl: process.env.NG_APP_AUTH_REDIRECT_URL
  },
  providers: [
    { provide: ProductService, useClass: ProductService }
  ]
};
