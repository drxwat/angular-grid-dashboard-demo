import { Component, OnInit } from '@angular/core';
import { GridConfig } from 'angular2-dashboard-grid';
import { GridService } from './app.shared/grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  gridConfig: GridConfig;
  constructor(private _gridService: GridService) {}

  ngOnInit() {
    this.gridConfig = this._gridService.getGrid();
  }

  processDragEnd() {
    console.log('Drad finished');
  }

  processResizeEnd() {
    console.log('Resize finished');
  }

  processEmptyClick() {
    console.log('Empty clicked');
  }

  processResize() {
    console.log('Now resizeing ...');
  }
}
