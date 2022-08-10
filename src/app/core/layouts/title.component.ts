import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  template: `
    <h1 class="page-title">{{ title }}</h1>
  `,
})
export class TitleComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  public title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.title = this.translate(this.buildTitle(this.activatedRoute.firstChild));
    this.title = this.buildTitle(this.activatedRoute.firstChild);
  }

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => this.title = this.buildTitle(this.activatedRoute.firstChild));
  }

  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  buildTitle(route: ActivatedRoute | null): string {
    return route?.routeConfig?.data?.['title'] || '';
  }

}
