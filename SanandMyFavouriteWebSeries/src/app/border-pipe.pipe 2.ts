import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';
@Pipe({
  name: 'borderPipe'
})
export class BorderPipePipe implements PipeTransform {

  transform(seriesList: Content[], SeriesType?: string): Content[] {
    if (SeriesType) {
      return seriesList.filter(series => series.type == SeriesType);
    }
    else {
      return seriesList.filter(series => series.type == null);
    }
  }

}
