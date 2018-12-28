export class HomeModel {
    pageTitle: string;
    contectToInnerHTML: string;

    constructor(obj: any) {
        this.pageTitle = obj.pageTitle;
        this.contectToInnerHTML = obj.contectToInnerHTML;
    }

    getViewInterface(): HomeViewInterface {
        return <HomeViewInterface>{
            title: this.pageTitle,
            content: this.contectToInnerHTML
        }
    }
}

export interface HomeViewInterface {
    title: string;
    content: string;
}