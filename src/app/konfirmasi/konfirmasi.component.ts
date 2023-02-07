import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-konfirmasi',
  templateUrl: './konfirmasi.component.html',
  styleUrls: ['./konfirmasi.component.scss']
})
export class KonfirmasiComponent {
  constructor(public dialogRef: MatDialogRef<KonfirmasiComponent>) {}

  konfirmasi() {
    this.dialogRef.close(true);   
  }
}
