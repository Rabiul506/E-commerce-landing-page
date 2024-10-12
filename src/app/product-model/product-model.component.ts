import { ProductItemsService } from './../services/product-items.service';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-model',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,JsonPipe,NgIf,NgFor,NgClass],
  templateUrl: './product-model.component.html',
  styleUrl: './product-model.component.scss'
})
export class ProductModelComponent implements OnInit{


  @ViewChild('myModel') model: ElementRef | undefined ;

  productObj: Products = new Products();

  openForm(){
    const model = document.getElementById('myModel');
    if(model != null){
        model.style.display = 'block'
    }
  }

  closeModel(){
    if(this.model != null){
      this.model.nativeElement.style.display = 'none'
    }
  }

  productForm: FormGroup = new FormGroup({});

  users: any[] = [];

  constructor(private productItemsService: ProductItemsService){
    this.productForm = new FormGroup({
      tittle: new FormControl(this.productObj.tittle, Validators.required),
      subTittle: new FormControl(this.productObj.subTittle, Validators.required),
      sku: new FormControl(this.productObj.sku, Validators.required),
      totalStock: new FormControl(this.productObj.totalStock, Validators.required),
      catagory: new FormControl(this.productObj.catagory, Validators.required),
      brands: new FormControl(this.productObj.brands, Validators.required),
      regPrice: new FormControl(this.productObj.regPrice, Validators.required),
      discount: new FormControl(this.productObj.discount, Validators.required),
      specification: new FormControl (this.productObj.specification),
      description: new FormControl (this.productObj.description),
      material: new FormControl (this.productObj.material)
    })

  }
  // Form model part 

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.productItemsService.getUsers();
  }

  saveItems(){
   

  }
  onSubmit(): void {
    console.log(this.productForm.value)
    if (this.productForm.valid) {
      this.productItemsService.createItem(this.productForm.value)
       this.productForm.reset();
       this.loadUsers();
     }
    
  }

  onEdit(index: number): void {
    const user = this.users[index];
    this.productForm.setValue({
      tittle: user.tittle.value,
      subTittle: user.subTittle,
      sku: user.sku,
      totalStock: user.totalStock,
      catagory: user.catagory,
      brands: user.brands,
      regPrice: user.regPrice,
      discount: user.discount,
      specification: user.specification,
      description: user.description,
      material: user.material,
    });
  
  }

  onDelete(index: number): void {
    this.productItemsService.deleteUser(index);
    this.loadUsers();
  }



}

export class Products {
  tittle: string;
  subTittle: string;
  sku: string;
  totalStock: string;
  catagory: string;
  brands: string;
  regPrice: string;
  discount: string;
  specification: string;
  description: string;
  material: string;

  constructor() {
    this.tittle = '',
    this.subTittle = '',
    this.sku = '',
    this.totalStock = '',
    this.catagory = '',
    this.brands = '',
    this.regPrice = '',
    this.discount = '',
    this.specification = '',
    this.description = '',
    this.material = ''

  }
}
