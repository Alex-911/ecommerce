import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm!: FormGroup;

  public categories: string[] = ['Electronics', 'Fashion', 'Food'];
  public subCategories: string[] = ['Mobile', 'Laptop', 'Tablet'];

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { animal: string; name: string },
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // name: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.maxLength(255),
      //     Validators.minLength(5),
      //   ],
      // ],
      // price: [0, [Validators.required, Validators.min(0)]],
      // description: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(5),
      //     Validators.maxLength(1000),
      //   ],
      // ],
      // image: [
      //   '',
      //   [Validators.required, Validators.pattern(/^(http:\/\/|https:\/\/).+$/)],
      // ],

      title: [''],
      brand: [''],
      varient: [''],
      category: [''],
      subCategory: [''],
      description: [''],
      image: [''],
      price: [0],
      sellingPrice: [0],
      quantity: [0],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
