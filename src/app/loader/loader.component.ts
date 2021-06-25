import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div [ngStyle]="getStyles()" class='loader'></div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() width:any;
  @Input() height:any;
  @Input() circle:any;

  constructor() { }

  ngOnInit(): void { 
  }

  getStyles(){
    const styles = {
      'width.px':this.width ? this.width:'',
      'height.px':this.height ? this.height:'',
      'border-radius':this.circle ? '50%':''
    };
    return styles;
  }

}
