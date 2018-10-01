import { Component, OnInit } from '@angular/core';
import { DistributionService } from '../services/distribution.service';
import { IDistribution } from '../models/distribution';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  public distributions: IDistribution[] = [];
  public distributionSearch: IDistribution[] = [];
  public showHeader: boolean = false;

  constructor( private _distributionService: DistributionService ) { }

  ngOnInit() {
    this._distributionService.getDistributions()
    .subscribe( data => this.distributions = data);
  }

  search( distributionParam: any) {

    if(!(this.distributions == null )) {
      this.distributionSearch = this.distributions;
    }

    if(!(distributionParam == "")) {
      this.distributionSearch = this.distributions.filter(distributions => distributions.distributionId === parseInt(distributionParam));
    }
    
    this.showHeader = true;
  }

}
