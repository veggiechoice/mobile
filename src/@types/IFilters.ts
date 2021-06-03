export interface IFilterParams {
  _limit: number;
  _sort: string;
  _order: 'ASC' | 'DESC';
  _page: number;
  _search: string;
}

export interface IProductFilterParams extends IFilterParams {
  _brandId: string;
}
