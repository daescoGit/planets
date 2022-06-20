import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Planets } from 'src/app/Planets';

@Component({
	selector: 'app-planet-list',
	templateUrl: './planet-list.component.html',
	styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
	// fix type
	planets: any[] = [];

	constructor(
		private planetsService: PlanetsService, 
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.planetsService.getPlanets().subscribe(planets => this.planets = planets.results)
	}

}
