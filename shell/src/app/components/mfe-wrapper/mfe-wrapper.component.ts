import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mfe-wrapper', //templateUrl: './mfe-wrapper.component.html',
  template: `
        <ng-container #placeHolder></ng-container>
    `,
  styleUrls: ['./mfe-wrapper.component.css']
})
export class MfeWrapperComponent implements OnInit {
  @Input()
  componentName: 'HeaderComponent' | 'FooterComponent' = 'HeaderComponent';
  headerRef: ComponentRef<any>;

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  private viewContainer: ViewContainerRef;

  constructor(private store: Store) {
    this.store.select(store => store).subscribe((state: any) => {
      if (this.headerRef) {
        this.headerRef.instance.todosCount = state.todos?.todos?.length;
        this.headerRef.instance.trackersCount = state.tracker?.habits?.length;
      }
    });
  }

  async ngOnInit() {
    try {
      this.viewContainer.clear();
      if (this.componentName === 'HeaderComponent') {
        const HeaderComponent = await loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './HeaderComponent'
        }).then(m => m[this.componentName]);

        this.headerRef = this.viewContainer.createComponent(HeaderComponent);
        this.headerRef.instance.title = 'Module Federation';
      } else {
        const FooterComponent = await loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './FooterComponent'
        }).then(m => m[this.componentName]);

        const componentRef: ComponentRef<{}> = this.viewContainer.createComponent(FooterComponent);
      }
    } catch (err) {
      console.error(err);
    }
  }

}
