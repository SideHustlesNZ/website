/* Shared shape for the Privacy Policy and Terms of Service sections. */
export type LegalText = { label: string; body: string };
export type LegalSection = {
  id: string;
  title: string;
  paras: LegalText[];
  items: LegalText[];
  after: LegalText[];
};
