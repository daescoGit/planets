import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-planet-card',
	templateUrl: './planet-card.component.html',
	styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {
	@Input() planet: any;
	@Input() planetID: any;

	constructor() { }

	ngOnInit(): void {
		
	}
}
