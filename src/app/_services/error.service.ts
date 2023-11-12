import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ErrorService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  public handleError(error: any) {
    console.error(error);
    if(error instanceof HttpErrorResponse) {
      if(error.error instanceof ErrorEvent) {
        this.showErrorSnackbar("ERROR: 0002 - An unknown http error occurred.");
      } else {
        switch (error.status) {
          case 400:
            this.showErrorSnackbar("ERROR: 0003 - " + error.error.error.message);
            break;
          case 401:
            this.showErrorSnackbar("ERROR: 0004 - Unauthorized.");
            break;
          case 403:
            this.showErrorSnackbar("ERROR: 0005 - Forbidden.");
            break;
          case 404:
            this.showErrorSnackbar("ERROR: 0006 - Not found.");
            break;
          case 409:
            this.showErrorSnackbar("ERROR: 0009 - " + error.error.message);
            break;
          case 500:
            this.showErrorSnackbar("ERROR: 0007 - Internal server error.");
            break;
          case 503:
            this.showErrorSnackbar("ERROR: 0008 - Service unavailable.");
            break;
          default:
            this.showErrorSnackbar("ERROR: 0001 - Server could not be reached.");
        }
      }
    } else{
      this.showErrorSnackbar("ERROR: 0000 - An unknown error occurred.");
    }
  }

  showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    })
  }
}
