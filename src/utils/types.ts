export const statusOptions = [
  { value: "student", label: "นิสิตปัจจุบัน" },
  { value: "alumni", label: "ศิษย์เก่า" },
];

export const typeOptions = [
  { value: "important", label: "เอกสารสำคัญ" },
  { value: "request", label: "เอกสารคำร้อง" },
];

export const importantDocOptions = [
  { value: "CR23", label: "จท23/CR23 (หนังสือรับรองความเป็นนิสิต)" },
  { value: "CR24", label: "จท24/CR24 (หนังสือรับรองความประพฤติ)" },
  { value: "CR25", label: "จท25/CR25 (ใบประมวลการศึกษา)" },
];

export const requestDocOptions = [
  { value: "CR41", label: "จท41/CR41 (คำร้องทั่วไป)" },
  { value: "CR45", label: "จท45/CR45 (คำร้องขอรับเงินคืน)" },
  { value: "CR50", label: "จท50/CR50 (คำร้องขอทำบัตรประจำตัวนิสิต)" },
];

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
  semester: number | null;
  educationType: string | null;
  faculty: string | null;
  department: string | null;
  gpax: number | null;
  tel: string | null;
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
};
