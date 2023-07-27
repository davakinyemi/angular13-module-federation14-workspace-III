import { Injectable } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of } from "rxjs";
import { translations } from "../i18n/translations";


@Injectable({
    providedIn: 'root',
})
export class CustomTranslateLoader implements TranslateLoader {

    getTranslation(lang: string): Observable<any> {
        return of(translations[lang]);
    }

}