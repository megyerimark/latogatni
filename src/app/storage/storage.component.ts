 /*
* File: storage.component
* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022-12-27
* Github: https://github.com/megyerimark
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  

  data:any = []

  constructor() { }

  ngOnInit(): void {

    this.data = [
      {name: "Székesfehérvár", county:"Fejér", area:170.89,population:  95545 },
      {name: "Szombathely", county: "Vas", area: 97.5, population:	78324},
      {name: "Sopron", county: "Győr-Moson-Sopron", area: 169.04, population: 62900},
      {name: "Zalaegerszeg", county: "Zala", area: 102.42, population: 55470},
      {name: "Sárvár", county: "Vas", area:	64.65, population: 15072},
      {name: "Lenti", county: "Zala", area:	73.79, population: 7348},
      {name: "Zalakaros", county: "Zala", area: 17.17, population: 1936}

    ]
  }

}
