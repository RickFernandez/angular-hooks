import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item!: Item;
  @Output() emitItemParaEditar = new EventEmitter<Item>();
  @Output() emitItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnDestroy(): void { }

  editarItem() {
    this.emitItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitItemParaDeletar.emit(this.item.id);
  }

  checarItem() {
    this.item.comprado ? this.item.comprado = false : this.item.comprado = true;
  }

}
