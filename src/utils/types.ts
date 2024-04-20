export const statusOptions = [
  { value: "นิสิตปัจจุบัน", label: "นิสิตปัจจุบัน" },
  { value: "ศิษย์เก่า", label: "ศิษย์เก่า" },
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

export const semesterOptions = [
  { value: "ต้น", label: "ต้น / 1st Semester" },
  { value: "ปลาย", label: "ปลาย / 2nd Semester" },
  { value: "ฤดูร้อน", label: "ฤดูร้อน / Summer Session" },
  { value: "ภาคที่ 1", label: "ภาคที่ 1 / 1st Trimester" },
  { value: "ภาคที่ 2", label: "ภาคที่ 2 / 2nd Trimester" },
  { value: "ภาคที่ 3", label: "ภาคที่ 3 / 3rd Trimester" },
];

export const facultyOptions = [
  {
    value: "1",
    label: "สถาบันภาษาไทยสิรินธร THE SIRINDHORN THAI LANGUAGE INSTITUTE",
  },
  { value: "2", label: "ศูนย์การศึกษาทั่วไป OFFICE OF ACADEMIC AFFAIRS" },
  { value: "20", label: "บัณฑิตวิทยาลัย GRADUATE SCHOOL" },
  { value: "21", label: "คณะวิศวกรรมศาสตร์ FACULTY OF ENGINEERING" },
  { value: "22", label: "คณะอักษรศาสตร์ FACULTY OF ARTS" },
  { value: "23", label: "คณะวิทยาศาสตร์ FACULTY OF SCIENCE" },
  { value: "24", label: "คณะรัฐศาสตร์ FACULTY OF POLITICAL SCIENCE" },
  { value: "25", label: "คณะสถาปัตยกรรมศาสตร์ FACULTY OF ARCHITECTURE" },
  {
    value: "26",
    label: "คณะพาณิชยศาสตร์และการบัญชี FACULTY OF COMMERCE AND ACCOUNTANCY",
  },
  { value: "27", label: "คณะครุศาสตร์ FACULTY OF EDUCATION" },
  { value: "28", label: "คณะนิเทศศาสตร์ FACULTY OF COMMUNICATION ARTS" },
  { value: "29", label: "คณะเศรษฐศาสตร์ FACULTY OF ECONOMICS" },
  { value: "30", label: "คณะแพทยศาสตร์ FACULTY OF MEDICINE" },
  { value: "31", label: "คณะสัตวแพทยศาสตร์ FACULTY OF VETERINARY SCIENCE" },
  { value: "32", label: "คณะทันตแพทยศาสตร์ FACULTY OF DENTISTRY" },
  { value: "33", label: "คณะเภสัชศาสตร์ FACULTY OF PHARMACEUTICAL SCIENCES" },
  { value: "34", label: "คณะนิติศาสตร์ FACULTY OF LAW" },
  { value: "35", label: "คณะศิลปกรรมศาสตร์ FACULTY OF FINE AND APPLIED ARTS" },
  { value: "36", label: "คณะพยาบาลศาสตร์ FACULTY OF NURSING" },
  { value: "37", label: "คณะสหเวชศาสตร์ FACULTY OF ALLIED HEALTH SCIENCES" },
  { value: "38", label: "คณะจิตวิทยา FACULTY OF PSYCHOLOGY" },
  { value: "39", label: "คณะวิทยาศาสตร์การกีฬา FACULTY OF SPORTS SCIENCE" },
  {
    value: "40",
    label: "สำนักวิชาทรัพยากรการเกษตร SCHOOL OF AGRICULTURAL RESOURCES",
  },
  { value: "51", label: "วิทยาลัยประชากรศาสตร์ COLLEGE OF POPULATION STUDIES" },
  {
    value: "53",
    label: "วิทยาลัยวิทยาศาสตร์สาธารณสุข COLLEGE OF PUBLIC HEALTH SCIENCES",
  },
  { value: "55", label: "สถาบันภาษา LANGUAGE INSTITUTE" },
  {
    value: "56",
    label: "สถาบันนวัตกรรมบูรณาการ SCHOOL OF INTEGRATED INNOVATION",
  },
  {
    value: "58",
    label:
      "สถาบันบัณฑิตบริหารธุรกิจ ศศินทร์ฯ SASIN GRADUATE INSTITUTE OF BUSINESS ADMINISTION",
  },
  {
    value: "63",
    label:
      "วิทยาลัยปิโตรเลียมและปิโตรเคมี THE PETROLEUM AND PETROCHEMICAL COLLEGE",
  },
  { value: "92", label: "วิทยาลัยพยาบาลตำรวจ POLICE NURSING COLLEGE" },
  { value: "99", label: "มหาวิทยาลัยอื่น OTHER UNIVERSITY" },
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
  semester: string | null;
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
