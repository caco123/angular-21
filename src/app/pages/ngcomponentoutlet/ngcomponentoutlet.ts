import { AfterViewInit, Component, ComponentRef, OnInit, viewChild, ViewContainerRef } from '@angular/core';
import { ViewContainerRefChildComponent } from './view-container-ref-child-component/view-container-ref-child-component';

@Component({
  selector: 'app-ngcomponentoutlet',
  imports: [],
  templateUrl: './ngcomponentoutlet.html',
  styleUrl: './ngcomponentoutlet.scss',
})
export class Ngcomponentoutlet implements AfterViewInit {
  containerRef = viewChild.required('viewContainerRef', { read: ViewContainerRef });

  child?: ComponentRef<ViewContainerRefChildComponent>;

  ngAfterViewInit(): void {
    this.addChild();
  }

  clearContainer(): void {
    this.containerRef().clear();
  }

  addChild(): void {
    this.child = this.containerRef().createComponent(ViewContainerRefChildComponent);
    this.child.setInput('name', 'Angular');
    this.child.instance.nameClicked.subscribe(() => {
      window.alert('child button clicked');
    });
  }
}
