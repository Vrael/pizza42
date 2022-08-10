import { ProductMockService } from 'src/app/products/product-mock.service';
import { ProductService } from './../app/products/product.service';

export const environment = {
  production: true,
  auth: {
    domain: process.env.NG_APP_AUTH_DOMAIN,
    clientId: process.env.NG_APP_AUTH_CLIENT_ID,
    redirectUrl: process.env.NG_APP_AUTH_REDIRECT_URL,
    audience: process.env.NG_APP_AUTH_AUDIENCE
  },
  providers: [
    // { provide: ProductService, useClass: ProductService }
    { provide: ProductService, useClass: ProductMockService } // TODO: Replace with the real when the API will be deployed.
  ]
};
