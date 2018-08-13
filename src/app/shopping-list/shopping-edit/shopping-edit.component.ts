import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInuptRef: ElementRef;
  @ViewChild('amountInput')
  amountInputRef: ElementRef;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();
  @Output()
  removedIngredient = new EventEmitter<void>();

  constructor() {}

  onAddItem(): void {
    const ingName = this.nameInuptRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  onClear(): void {
    this.nameInuptRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

  onDelete(): void {
    this.removedIngredient.emit();
  }

  ngOnInit() {}
}
