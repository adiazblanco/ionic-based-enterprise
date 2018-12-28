import { Injector, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

export class AppInteractor {

    public errorHandled: string;

    constructor(@Inject(Injector) private injector) {
    }

    public invokeGetHttpService(path: string): Observable<Object> {
        this.errorHandled = null;
        const httpClient: HttpClient =  this.injector.get(HttpClient);
        return httpClient.get(
            'http://localhost:8888' + path
            )
            .catch( (e: HttpErrorResponse) => {
                this.errorHandled = (e) ? e.message : 'Internal Server error';
                return Observable.throw(e);
            });
    }
}