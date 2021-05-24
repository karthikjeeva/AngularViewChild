import { Component, ElementRef, ViewChild } from '@angular/core';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  //query simple DOM
  @ViewChild('domRef')
  domRef: ElementRef;

  @ViewChild('openDiffComponent')
  openDiffComponent:Component2Component;

  @ViewChild('componentElemRef', {read: ElementRef})
  componentElemRef:Component2Component;

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.domRef.nativeElement);

    //get component instance
    console.log("component instance:", this.openDiffComponent);

     //get component ref  DOM
     console.log("component instance:", this.componentElemRef);

     //calling component2 method
     this.openDiffComponent.printName('Ravi');

  }

  openMethod() {

  }


}
