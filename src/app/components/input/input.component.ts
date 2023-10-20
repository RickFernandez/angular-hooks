import { Component, Input, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() itemQueVaiSerEditado!: Item;

  valorItem!: string;
  editando = false;
  textoBtn = 'Salvar item';

  constructor(private listaService: ListaDeCompraService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.listaService.adicionarItem(this.valorItem);
    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItem(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  limparCampo() {
    this.valorItem = '';
  }
}
