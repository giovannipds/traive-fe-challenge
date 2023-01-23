export interface FarmerName {
  firstName: string;
  lastName: string;
}

export interface CreditRequest {
  id: string;
  farmer_id: string;
  purpose: string[];
  season: string;
  due_date: string;
  amount: number;
}

export interface FarmerRequest {
  id: string;
  farmer: FarmerName;
  status: string;
  credit_requests: CreditRequest[];
}

export interface FullFarmerRequest extends FarmerRequest {
  amount_requested: number;
}

export interface Data {
  items: FarmerRequest[];
  totalInPage: number;
  totalItems: number;
  totalPages: number;
}

export interface FullData extends Data {
  items: FullFarmerRequest[];
}
