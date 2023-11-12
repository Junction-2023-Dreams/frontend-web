import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PatientsService {

  patients: any = [
    {
      "id": 2,
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@email.com",
      "phone": "555-1234",
      "risk": "0.42"
    },
    {
      "id": 3,
      "firstname": "Alice",
      "lastname": "Johnson",
      "email": "alice.j@email.com",
      "phone": "555-5678",
      "risk": "0.21"
    },
    {
      "id": 4,
      "firstname": "Bob",
      "lastname": "Smith",
      "email": "bob.smith@email.com",
      "phone": "555-9876",
      "risk": "0.63"
    },
    {
      "id": 5,
      "firstname": "Eva",
      "lastname": "Williams",
      "email": "eva.w@email.com",
      "phone": "555-4321",
      "risk": "0.15"
    },
    {
      "id": 6,
      "firstname": "Chris",
      "lastname": "Miller",
      "email": "chris.m@email.com",
      "phone": "555-8765",
      "risk": "0.78"
    },
    {
      "id": 7,
      "firstname": "Grace",
      "lastname": "Taylor",
      "email": "grace.t@email.com",
      "phone": "555-2345",
      "risk": "0.29"
    },
    {
      "id": 8,
      "firstname": "David",
      "lastname": "Brown",
      "email": "david.b@email.com",
      "phone": "555-6543",
      "risk": "0.54"
    },
    {
      "id": 9,
      "firstname": "Sophie",
      "lastname": "Martin",
      "email": "sophie.m@email.com",
      "phone": "555-7890",
      "risk": "0.47"
    },
    {
      "id": 10,
      "firstname": "Ryan",
      "lastname": "Anderson",
      "email": "ryan.a@email.com",
      "phone": "555-3456",
      "risk": "0.36"
    },
    {
      "id": 11,
      "firstname": "Emma",
      "lastname": "Clark",
      "email": "emma.c@email.com",
      "phone": "555-8901",
      "risk": "0.62"
    },
    {
      "id": 12,
      "firstname": "Michael",
      "lastname": "White",
      "email": "michael.w@email.com",
      "phone": "555-6789",
      "risk": "0.18"
    },
    {
      "id": 13,
      "firstname": "Olivia",
      "lastname": "Moore",
      "email": "olivia.m@email.com",
      "phone": "555-1235",
      "risk": "0.72"
    },
    {
      "id": 14,
      "firstname": "Andrew",
      "lastname": "Jones",
      "email": "andrew.j@email.com",
      "phone": "555-5432",
      "risk": "0.27"
    },
    {
      "id": 15,
      "firstname": "Ava",
      "lastname": "Hall",
      "email": "ava.h@email.com",
      "phone": "555-8765",
      "risk": "0.41"
    },
    {
      "id": 16,
      "firstname": "Daniel",
      "lastname": "Ward",
      "email": "daniel.w@email.com",
      "phone": "555-2345",
      "risk": "0.59"
    }
  ];

  constructor(
    private http: HttpClient,
  ) {
  }

  create(patient: any) {
    this.patients.push(patient);
  }
  readAll() {
    return this.patients;
  }
}
