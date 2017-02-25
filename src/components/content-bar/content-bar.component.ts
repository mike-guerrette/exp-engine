import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-bar',
    templateUrl: 'content-bar.component.html',
    styleUrls: ['./content-bar.component.scss']
})
export class ContentBarComponent implements OnInit {
    constructor() { }

    showDialog() {
    }

    ngOnInit() {
        console.log('content-bar created.');
    }
}