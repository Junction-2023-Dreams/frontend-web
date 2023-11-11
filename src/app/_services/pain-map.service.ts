import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PainMapService {

  painSpots: any = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  create(painSpots: any) {
    this.painSpots = painSpots;
  }
  readAll() {
    return this.painSpots;
  }
}
