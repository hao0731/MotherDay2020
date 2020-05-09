import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        './scss/layout.scss',
        './scss/elements.scss'
    ],
    animations: [
        trigger('visibilityChanged', [
          state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
          state('false', style({ opacity: 0, transform: 'scale(0.6)', display: 'none' })),
          transition('1 => 0', animate('300ms')),
          transition('0 => 1', [
              style({ display: 'block' }),

              animate('900ms')
          ])
        ])
    ],
})
export class AppComponent implements OnInit {

    public parts: boolean[] = [];

    ngOnInit(): void {
        for (let i = 0; i < 19; i++) {
            this.parts.push(i === 0);
        }
    }

    public onClickStart(): void {
        this.setPart(1);
    }

    public reset(): void {
        this.parts[this.parts.length - 1] = false;
        setTimeout(() => this.parts[0] = true, 300);
    }

    private setPart(idx: number, end = false): void {
        this.parts[idx - 1] = false;
        setTimeout(() => this.parts[idx] = true, 300);
        if ( !end ) {
            setTimeout(() => this.setPart(idx + 1, idx === this.parts.length - 2), 4300);
        }
    }

}
