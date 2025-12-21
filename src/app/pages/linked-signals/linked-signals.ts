import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.scss',
})
export class LinkedSignals {
  products = signal<Product[]>([
    {
      name: 'Product 1',
      price: 10,
    },
    {
      name: 'Product 2',
      price: 20,
    },
    {
      name: 'Product 3',
      price: 30,
    }]);

  selectedProduct = signal<Product | null>(null);

  price = computed(() => this.selectedProduct()?.price ?? 0);

  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: () => 1
  });

  total = computed(() => {
    return this.price() * this.quantity();
  })

  quantityChanged(newQuantity: number) {
    this.quantity.update((prevQuantity) => prevQuantity + newQuantity);
  }
}
export interface Product {
  name: string;
  price: number;
}