import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output, SimpleChanges,
  ViewChild,
  ViewRef
} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-select-pain-position',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './select-pain-position.component.html',
  styleUrl: './select-pain-position.component.css'
})
export class SelectPainPositionComponent implements OnChanges {
  @Input() inputFile: string = '';
  @ViewChild('selectPainContainer') image: any;
  @Input() painSpots: any = [];
  @Output() painSpotsChange: EventEmitter<any> = new EventEmitter<any>()
  @Input() isSelected: boolean = false;

  clickX: number = 0;
  clickY: number = 0;
  innerHeight: number = 0;
  innerWidth: number = 0;

  selectPosition($event: MouseEvent) {
    this.updateDimensions();
    this.clickX = $event.offsetX / this.innerWidth ;
    this.clickY = $event.offsetY / this.innerHeight ;

    this.painSpots.push({
      posX: this.clickX,
      posY: this.clickY
    });
    this.painSpotsChange.emit(this.painSpots);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDimensions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if(changes['isSelected']) {
        this.updateDimensions();
      }
    }, 100);
  }
  updateDimensions() {
    if(this.image && this.isSelected) {
      this.innerWidth = this.image.nativeElement.offsetWidth;
      this.innerHeight = this.image.nativeElement.offsetHeight;
    }
  }
}
