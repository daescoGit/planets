import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlanetsService } from 'src/app/services/planets.service';
import { Planet } from 'src/app/Planet';

@Component({
	selector: 'app-planet-page',
	templateUrl: './planet-page.component.html',
	styleUrls: ['./planet-page.component.css']
})
export class PlanetPageComponent implements OnInit {
	planet$: any;

	constructor(  
		private route: ActivatedRoute,
		private router: Router,
		private planetService: PlanetsService
	) { }

	ngOnInit(): void {
		/* this.planet$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
				this.planetService.getPlanet(params.get('id')!))
		).subscribe(planet => this.planet$ = planet); */

		const planetID = this.route.snapshot.paramMap.get('id');
		this.planet$ = this.planetService
			.getPlanet(planetID)
			.subscribe(planet => this.planet$ = planet);
	}

}
