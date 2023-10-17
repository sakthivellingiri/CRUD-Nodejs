import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";



@Component({
  selector: "app-dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class DashboardComponent implements OnInit {
  id: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.http.get<any>('http://localhost:3550/client/' + this.id)
      .subscribe((data) => {
        this.username = data[0].username;
        this.email = data[0].email;
        this.password = data[0].password;
      });



  }
  //
  del(id: any) {
    const key = { id: id };
    //console.log(id)
    this.http.post<any>(`http://localhost:3550/delete/${id}`, key)
      .subscribe((res) => {
        //console.log(res)
        if (res.status === "error") {
          alert("Data was not deleted");
        } else {
          alert("Data was deleted");
        }
      });
  }

  //path
  //   <a [routerLink]="'/update/' + id">
  //   <button class="btn btn-primary">Submit</button>
  // </a>


  // <Link to={`/update/${id}`}><input type='submit' value='submit' className='btn btn-primary'/>
  // </Link>

  fetchdata(id: any): void {
         this.router.navigate(['/update',id])

  }
}



