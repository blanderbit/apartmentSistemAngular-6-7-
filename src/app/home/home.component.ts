import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts = null;
  public lists = ['Air tickts', 'Railway tickets', 'Bus', 'Office', 'Hotel','Transport', 'Tour'];
  @Input() color: 'primary'
  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
    this._serviceService.posts().subscribe(data => {
        this.posts = data.reverse()
        console.log(this.posts)
      },
      err => {
        console.log(err)
    })

  }
  showUrlPhoto(value){
    let arr = value.split('.')
    if(arr.length == 5){
      return value
    } else {
      return 'https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/themes/gonzo/images/no-image-featured-image.png'
    }
  }
}
