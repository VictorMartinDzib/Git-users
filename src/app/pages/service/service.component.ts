import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { InfoUsuario } from 'src/app/interfaces/info.interface';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  repositories: any;
  user: InfoUsuario = {};
  username: any;
  url: string = "https://api.github.com/users/VictorMartinDzib/repos";
  url_user: string = "https://api.github.com/users/VictorMartinDzib";
  name: string;

  constructor(private serviceRepos: CommentsService) { }

  ngOnInit() {
   // console.log("INIT");
    //this.serviceRepos.cargarInfo();
    this.repositories = this.serviceRepos.getRepositories(this.url);
    this.serviceRepos.getInfo(this.url_user).subscribe((resp: InfoUsuario)=>{
      this.user = resp;
    });
   // 
    this.name = this.user.id;
    //alert(this.name);
  //  console.log(this.serviceRepos.values);
  }

  escuchaClick(id: number){
    console.log("Click en: ", id);
  }

  setClick(){
    this.url = "https://api.github.com/users/"+this.username+"/repos";
    this.url_user = "https://api.github.com/users/" + this.username;

    //console.log(this.url);
    this.repositories = this.serviceRepos.getRepositories(this.url);
    this.serviceRepos.getInfo(this.url_user).subscribe((resp: InfoUsuario)=>{
      this.user = resp;
    },(error)=>{
      alert("El usuario al parecer no existe :(");
      this.user = null;
    });
  }

}
