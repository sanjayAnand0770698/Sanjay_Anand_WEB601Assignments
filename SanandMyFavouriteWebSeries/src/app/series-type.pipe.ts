import { Content } from './models/content';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seriesType'
})
export class SeriesTypePipe implements PipeTransform {

  
  transform(seriesList: Content[], SeriesType?: string): Content[] {
    if(SeriesType){
      return seriesList.filter(series=>series.type==SeriesType);
    }
    else{
      return seriesList.filter(series=>series.type==null);
    }
  }

}
