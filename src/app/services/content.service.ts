import { Injectable } from "@angular/core";
import { CONTENT } from "../models/appointment";
import { Observable, Subject, from, of } from "rxjs";

@Injectable()
export class ContentService{

    addContent(content:CONTENT){
        this.$content.next(content);
    }

    $content = new Subject<CONTENT>();
}