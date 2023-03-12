import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  modalAdd: boolean = false;
  modalDelete: boolean = false;
  modalOrder: boolean = false;
  name = new FormControl('', Validators.required);
  price = new FormControl(0, Validators.required);
  format = new FormControl('', Validators.required);
  brand = new FormControl('', Validators.required);
  selectedValue: string = '';
  value: number = 0;
  addTornillosForm: FormGroup;
  states: string[] = [
  "Account",
  "Accruals",
  "AcctImport"
  ];


  private readonly formatFormConfig = {
    name: this.name,
    price: this.price,
    format: this.format,
    brand: this.brand
  };

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.price.setValue(this.value);
    this.addTornillosForm = this.formBuilder.group(this.formatFormConfig);
    if (this.data.event === "add") {
      this.modalAdd = true;
    } else if (this.data.event === "delete") {
      this.modalDelete = true;
    } else if (this.data.event === "order") {
      this.modalOrder = true;
    }
    
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  handleMinus() {
    if (this.value > 0) {
      this.value = Number ((this.value - 0.1).toFixed(1))
      this.price.setValue(this.value);
    }
  }
  handlePlus() {
    this.value = Number ((this.value + 0.1).toFixed(1));
    this.price.setValue(this.value);
  }
  onNoClick() {
    this.dialogRef.close();
    
  }
  saveTornillo() {
    if(!this.addTornillosForm.valid) {
      alert("Formulario no válido, por favor rellene todos los campos.");
    } else {
      alert("Tornillo añadido")
      this.dialogRef.close();
    }
    console.log(this.addTornillosForm.valid);
    console.log(this.name.value);
    console.log(this.price.value);
    console.log(this.format.value);
    console.log(this.brand.value);

  }

}