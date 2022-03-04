import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {

  constructor(private car:CarService) { }
  addForm = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      companyName: new FormControl("", [Validators.required]),
      fuelType: new FormControl("", [Validators.required]),
      powerSteering: new FormControl("", [Validators.required]),
      breakSystem: new FormControl("", [Validators.required]),
      showroomPrice: new FormControl("", [Validators.required]),
      onRoadPrice: new FormControl("", [Validators.required]),
      imageUrl: new FormControl("", [Validators.required]),
      mileage: new FormControl("", [Validators.required]),
      seatingCapacity: new FormControl("", [Validators.required]),
      engineCapacity: new FormControl("", [Validators.required]),
      gearType: new FormControl("", [Validators.required]),
    }
  )
  get name() {
    return this.addForm.get("name")
  }
  get companyName() {
    return this.addForm.get("companyName")
  }
  get fuelType() {
    return this.addForm.get("fuelType")
  } 
  get powerSteering() {
    return this.addForm.get("powerSteering")
  } 
  get showRoomPrice() {
    return this.addForm.get("showRoomPrice")
  }
  get OnRoadPrice() {
    return this.addForm.get("onRoadPrice")
  }
  get  imageUrl() {
    return this.addForm.get("imageUrl")
  }
  get mileage() {
    return this.addForm.get("mileage")
  }
  get seatingCapacity() {
    return this.addForm.get("seatingCapacity")
  }
  get engineCapacity() {
    return this.addForm.get("engineCapacity")
  }
  get gearType() {
    return this.addForm.get("gearType")
  }
  get breakSystem() {
    return this.addForm.get("breakSystem")
  }


  ngOnInit(): void {
    
  }
  addCarDetails(){
    this.car.addDetails(this.addForm.value).subscribe((res:any)=>{
      console.log(res);
      
    })

}
}
