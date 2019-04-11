import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';
declare const $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MessageService]
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private router: Router, private messageService: MessageService) {
    }

    ngOnInit() {
    }
}
