import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Planets } from '../Planets';
import { Planet } from '../Planet';

@Injectable({
	providedIn: 'root'
})
export class PlanetsService {
	private apiUrl = 'https://swapi.dev/api/planets/';

	constructor(private http: HttpClient) { }

	// caching?
	// error handling
	getPlanets(): Observable<Planets> {
		return this.http.get<Planets>(this.apiUrl)
	}

	getPlanet(id: string | null): Observable<Planet> {
		return this.http.get<Planet>(this.apiUrl + id)
	}
}
