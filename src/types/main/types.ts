export interface ApiType {
  CODENAME: string[];
  GUNAME: string[];
  TITLE: string[];
  DATE: string[];
  PLACE: string[];
  ORG_NAME: string[];
  USE_TRGT: string[];
  USE_FEE: string[];
  PLAYER: string[];
  PROGRAM: string[];
  ETC_DESC: string[];
  ORG_LINK: string[];
  MAIN_IMG: string[];
  RGSTDATE: string[];
  TICKET: string[];
  STRTDATE: string[];
  END_DATE: string[];
  THEMECODE: string[];
  LOT: string[];
  LAT: string[];
  IS_FREE: string[];
  HMPG_ADDR: string[];
}

export interface ResultObject {
  CODE: string;
  MESSAGE: string;
}

export interface CulturalEventInfo {
  list_total_count: string[];
  RESULT: ResultObject[];
  row: ApiType[];
}

export interface ApiRes {
  culturalEventInfo: CulturalEventInfo;
}
