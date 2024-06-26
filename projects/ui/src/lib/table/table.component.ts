import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'john', lastname: 'Doe', email: 'john@example.com' },
  { id: 2, name: 'Mary', lastname: 'Moe', email: 'Mary@example.com' },
  { id: 3, name: 'July', lastname: 'Dooley', email: 'July@example.com' },
  { id: 4, name: 'john', lastname: 'Doe', email: 'john@example.com' },
  { id: 5, name: 'Mary', lastname: 'Moe', email: 'Mary@example.com' },
  { id: 6, name: 'July', lastname: 'Dooley', email: 'July@example.com' },
];

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
