import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  superHeroes: Observable<any>;

  publi = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
    this.segment.value = 'todos';
    this.segment.mode = 'ios';
    // console.log(this.segment.value);
  }

  segmentChanged (event) {
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos') {
      this.publi = '';
      return;
    }

    this.publi = valorSegmento;
  }

}
