import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Setup translations
    // this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    // const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    //
    // // Change page title on navigation or language change, based on route data
    // merge(this.translateService.onLangChange, onNavigationEnd)
    //   .pipe(
    //     map(() => {
    //       let route = this.activatedRoute;
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     }),
    //     filter(route => route.outlet === 'primary'),
    //     mergeMap(route => route.data)
    //   )
    //   .subscribe(event => {
    //     const title = event['title'];
    //     if (title) {
    //       this.titleService.setTitle(this.translateService.instant(title));
    //     }
    //   });
  }
}
