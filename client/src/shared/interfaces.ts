export interface ICommon {
  id: string;
}

export interface IAccount extends ICommon {
  owner: IAccountOwner;
  name: string;
  site?: string;
  parentAccountId?: string;
  number?: string;
  type?: string;
  industry?: string;
  annualRevenue?: number;
  rating?: string;
  phone?: string;
  fax?: string;
  website?: string;
  tickerSymbol?: string;
  ownership?: string;
  employees?: number;
  sicCode?: string;
  description?: string;
  billingAddress?: IAddress;
  shippingAddress?: IAddress;
  tags?: ITag[];
  createdBy: string;
  updatedBy: string;
}

export interface IAccountOwner {
  id: string;
  name?: string;
  email?: string;
}

export interface IAddress extends ICommon {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

export interface ITag extends ICommon {
  name: string;
  colorCode: string;
}
