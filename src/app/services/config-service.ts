import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configData: ConfigData = { baseUrl: '' };
  setConfig(config: ConfigData | unknown): void {
    this.configData = config as ConfigData;
  }
}

export interface ConfigData {
  baseUrl: string;
}
