import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css',
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() icon: string | null = '';
  @Input() value: string = '';
  @Input() change: string | null = '';
  @Input() changing: string | null = '';
  @Input() colorClass: string = '';
  @Input() loadingState: boolean = false;
}
