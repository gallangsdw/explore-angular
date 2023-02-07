import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { KonfirmasiComponent } from './konfirmasi/konfirmasi.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buku-tamu';
  constructor(
    public dialog: MatDialog, 
    public api: ApiService
    )
  {
    this.getData();
  }

  buatAlamat()
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: "700px",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog ditutup");
    });
  }

  detailAlamat() {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {});
    dialogRef.afterClosed().subscribe (result => {
      console.log("dialog ditutup")
    })
  }

  konfirmasiHapus() {
    const dialogRef = this.dialog.open(KonfirmasiComponent,{
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
      {console.log("menghapus data");}
    });
  }

  getData() {
    this.api.status().subscribe (res =>{
      console.log(res);
    })
  }
}
