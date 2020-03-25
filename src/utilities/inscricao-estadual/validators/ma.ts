import { CE } from './ce';

export class MA extends CE {
  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '12';
  }
}
