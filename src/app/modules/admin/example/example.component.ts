import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit{

opened: boolean = false;
    /**
     * Constructor
     */
    constructor()
    {
    }
    ngOnInit(): void {
        
    }
    open(): void
    {
        // Return if it's already opened
        if ( this.opened )
        {
            return;
        }

        // Open the search
        this.opened = true;
    }
}
