import { Observable } from 'rxjs/Observable'
import { AppInteractor } from '../../app/app.interactor';
import { HomeModel, HomeViewInterface } from './home.model';
import { BehaviorSubject } from 'rxjs';
import { Host } from '@angular/core';
import 'rxjs/add/operator/catch';

export class HomeInteractor {
    public errorHandled: string;
    private homeBehaviorSubject = new BehaviorSubject<HomeViewInterface>(null);

    constructor(@Host() private appInteractor: AppInteractor) {}

    public getHomeInfo(): Observable<HomeViewInterface> {
        this.appInteractor
            .invokeGetHttpService('/home')
            .take(1)
            .map(result => new HomeModel(result))
            .catch( (e: string) => {
                this.errorHandled = e;
                return Observable.throw(e);
            })
            .subscribe((response: HomeModel) => {
                this.homeBehaviorSubject.next(response.getViewInterface());
            });

        return this.homeBehaviorSubject.asObservable();
    }

    public changeContent() {
        
        this.homeBehaviorSubject.next(<HomeViewInterface>
            {
                title: 'Titulo del Home con click',
                content: 'Contenido del Home con click'
            });
    }
}