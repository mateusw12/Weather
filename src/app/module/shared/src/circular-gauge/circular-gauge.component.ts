import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './circular-gauge.component.html',
  selector: 'app-circular-gauge',
})
export class CircularGaugeComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  id: string = '';

  @Input()
  chartValue: number | null = null;

  @Input()
  width: number = 0;

  @Input()
  height: number = 0;

  @Input()
  invertRange: boolean = false;

  ngOnInit(): void {}
}
