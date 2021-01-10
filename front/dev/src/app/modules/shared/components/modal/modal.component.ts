import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean

  constructor() {
  }

  ngOnInit(): void {
  }

}
