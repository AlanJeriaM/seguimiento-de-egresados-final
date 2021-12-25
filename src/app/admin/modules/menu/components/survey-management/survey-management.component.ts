import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../../../../../src/assets/product';
import { ProductService } from '../../../../../../../src/assets/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-survey-management',
  templateUrl: './survey-management.component.html',
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./survey-management.component.scss']
})
export class SurveyManagementComponent implements OnInit {

  productDialog!: boolean ;

    products: Product[] = [];

    product: Product ;

    selectedProducts: Product[] = [];

    submitted!: boolean;

    statuses: any[];

    items: MenuItem[];

    @ViewChild('dt1') table!: Table;

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Paso 1',
                routerLink: 'paso1'
            },
            {
                label: 'Paso 2',
                routerLink: 'paso2'
            },
            {
                label: 'Paso 3',
                routerLink: 'paso3'
            }
        ];
        this.productService.getProducts().then(data => this.products = data);
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = [];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    
    saveProduct() {
        this.submitted = true;

        if (this.product.name!.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
