import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  featureSelected = new EventEmitter<string>();

  @ViewChild('check')
  checkEl: ElementRef;

  constructor() {}

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }

  ngOnInit() {
    console.log(this.checkEl.nativeElement);
  }
}
