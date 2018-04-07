import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	url = 'https://yesno.wtf/api';
	answer;

	constructor(private http: HttpClient) {
		this.answer = http.get(this.url);
	}
}
