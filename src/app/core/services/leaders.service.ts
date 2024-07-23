import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LeadersService {

    private dataUrl: string ='assets/data.json';

    constructor(
        private http: HttpClient
    ) { }

    getAllLeaders(): Observable<any[]> {
        return this.http.get<any[]>(this.dataUrl);
    }

    getLeaderById(id: number): Observable<any> {
        return this.http.get<any[]>(this.dataUrl).pipe(
            map(leaders => leaders.find(leader => leader.id === id))
        );
    }
}