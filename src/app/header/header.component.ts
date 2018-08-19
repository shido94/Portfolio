import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  //   $(function() {
  //     console.log('reaches');
  //     $('#nav li a').click(function() {
  //       // $('#nav li').removeClass();
  //       // $($(this).attr('routerLink')).addClass('active');
  //       $(this).addClass('active').siblings().removeClass('active');
  //   });
  //
  // });
  }

}
