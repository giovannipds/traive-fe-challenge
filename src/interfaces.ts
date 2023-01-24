export interface FarmerName {
  firstName: string;
  lastName: string;
}

enum Status {
  Approved = "approved",
  Draft = "draft",
  Ready = "ready",
  Rejected = "rejected",
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
  status: Status;
  credit_requests: CreditRequest[];
}

export interface FullFarmerRequest extends FarmerRequest {
  amount_requested: number;
  due_date: string;
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
