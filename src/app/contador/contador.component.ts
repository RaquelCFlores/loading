import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
        <div class="card">
            <app-loader *ngIf="!loaded" [width]="230" [height]="40"></app-loader>
            <h1 *ngIf="loaded" class='title'>{{titulo}}</h1>

            <app-loader *ngIf='!loaded' [width]='120' [height]='25'> </app-loader>
            <h3 *ngIf='loaded'>La base es: <strong>{{base}}</strong></h3>
            <div class="buttons">
                <app-loader class=''*ngIf='!loaded' [width]='30' [height]='30'></app-loader>
                <button (click)= "acumular(base)" *ngIf="loaded">+{{base}}</button>
                <app-loader *ngIf='!loaded' [width]='55' [height]='30'></app-loader>
                <span *ngIf="loaded" class='number'> {{numero}}</span>
                <app-loader *ngIf='!loaded' [width]='30' [height]='30'></app-loader>
                <button (click) = "acumular(-base)" *ngIf="loaded">-{{base}}</button>
            </div>
        </div>
    `,
    styleUrls: ['.././app.component.css']
})

export class ContadorComponent implements OnInit{
    titulo:string = 'Contador App';
    numero:number = 10;
    base:number = 5;

    acumular(valor:number){
        this.numero += valor;
    }

    loaded = false;

    ngOnInit() {
    setTimeout(() => {
        this.loaded = true;
    }, 3000);
    }

}