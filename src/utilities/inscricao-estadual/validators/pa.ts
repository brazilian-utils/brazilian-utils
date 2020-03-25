import { CE } from './ce';

export class PA extends CE {
  protected itStartsWith(ie: string): boolean {
    return ie.substr(0, 2) === '15';
  }
}
