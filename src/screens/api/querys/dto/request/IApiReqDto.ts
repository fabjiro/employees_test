export class IApiReqDto {
  sort: string;
  pageSize: number;
  page: number;

  constructor( sort: string = "label", pageSize: number = 10, page: number = 0) {
    this.sort = sort;
    this.pageSize = pageSize;
    this.page = page;
  }

  toMap(): Record<string, string> {
    return {
      '_sort': this.sort,
      '_pageSize': this.pageSize.toString(),
      '_page': this.page.toString(),
    };
  }
}
