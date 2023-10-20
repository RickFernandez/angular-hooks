import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra!: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nome: string) {
    const id = this.listaDeCompra.length + 1;

    const item: Item = {
      id: id,
      nome: nome,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    };

    return item;
  }

  adicionarItem(nome: string) {
    const item = this.criarItem(nome);
    this.listaDeCompra.push(item);
    // this.atualizarLocalStorage();
  }

  editarItem(itemAntigo: Item, novoNome: string) {
    const itemEditado : Item = {
      id: itemAntigo.id,
      nome: novoNome,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    // this.atualizarLocalStorage();
  }

  deletarItem() {
    
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
