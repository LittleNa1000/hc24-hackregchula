export type requestType = {
  status: string | null;
  type: string | null;
  doc: string | null;
};

export const defaultRequest: requestType = {
  status: null,
  type: null,
  doc: null,
};

export type docRequestType = {
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  semester: string | null;
  educationType: string | null;
  faculty: string | null;
  department: string | null;
  gpax: number | null;
  tel: string | null;
  file: File | undefined;
};

export const defaultDocRequest: docRequestType = {
  title: null,
  firstName: null,
  lastName: null,
  semester: null,
  educationType: null,
  faculty: null,
  department: null,
  gpax: null,
  tel: null,
  file: undefined,
};

export type docImportantType = {
  method: string | null;
  tel: string | null;
  email: string | null;
  address: string | null;
  zip: string | null;
  province: string | null;
  file: File | undefined;
  paymentMethod: string | null;
  creditCardNumber: string | null;
  creditCardExpire: string | null;
  creditCardCVV: string | null;
};

export const defaultDocImportant: docImportantType = {
  method: null,
  tel: null,
  email: null,
  address: null,
  zip: null,
  province: null,
  file: undefined,
  paymentMethod: null,
  creditCardNumber: null,
  creditCardExpire: null,
  creditCardCVV: null,
};
