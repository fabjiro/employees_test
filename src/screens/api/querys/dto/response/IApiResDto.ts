export interface IApi {
  format: string;
  version: string;
  result: IResult;
}

export interface IResult {
  _about: string;
  definition: string;
  extendedMetadataVersion: string;
  first: string;
  isPartOf: IIsPartOf;
  items: IItem[];
  itemsPerPage: number;
  next: string;
  page: number;
  startIndex: number;
  type: string;
}

export interface IIsPartOf {
  _about: string;
  definition: string;
  hasPart: string;
  type: string;
}

export interface IItem {
  _about: string;
  autonomia: string;
  label: string;
  pais: string;
  sameAs: string;
  type: string;
}
