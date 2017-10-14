import {Injectable} from '@angular/core';
import { GridConfig, GridRowConfig, GridCellConfig } from 'angular2-dashboard-grid';
import { APP_CONFIG } from './app.config';

@Injectable()
export class GridService {
    public getGrid(): GridConfig {
        return [
            {
                row: this.getDefaultRow(),
                cells: [
                    {cell: this.getDefaultCell()},
                    {cell: this.getDefaultCell()},
                    {cell: this.getDefaultCell()}
                ],
            },
            {
                row: this.getDefaultRow(),
                cells: [
                    {cell: this.getDefaultCell()},
                    {cell: this.getDefaultCell()}
                ],
            }
        ];
    }


    public getDefaultRow(): GridRowConfig {
        return {
            id: this.getRandomId(),
            width: APP_CONFIG.GRID.gridRowWidth,
            height: APP_CONFIG.GRID.griRowHeight,
            minCellHeight: APP_CONFIG.GRID.minCellHeight,
            minCellWidth: APP_CONFIG.GRID.minCellWidth,
            emptySpaceThreshold: 20,
            unifyHeight: true
        };
    }

    private getDefaultCell(): GridCellConfig {
        return {
            id: this.getRandomId(),
            height: APP_CONFIG.GRID.minCellHeight,
            width: APP_CONFIG.GRID.minCellWidth,
            dragHandleSelector: APP_CONFIG.GRID.cellDragHandleSelector,
            resizeHandleSelector: APP_CONFIG.GRID.cellResizeHandleSelector
        };
    }

    private getRandomId(): string {
        return Math.random().toString(36).substring(7);
    }
}


