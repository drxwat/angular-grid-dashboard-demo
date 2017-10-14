import { GridCellConfig, GridRowConfig, GridConfig } from 'angular2-dashboard-grid';

// You can add additional field to you config:
export type MyCustomGridConfig = [
    {
        row: MyCustomGridRowConfig;
        cells: {
            cell: GridCellConfig;
            someData: string // Like this
        }[];
        data: string; // Or this
    }
];

// OR you can extend initial types. Grid will ignore unknown fields.
export interface MyCustomGridRowConfig extends GridRowConfig {
    metaInfo: string;
}
