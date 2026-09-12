/**
 * Federative union codes ("01" for São Paulo and "02" for Minas Gerais) whose
 * voter ids may carry a 9-digit sequential number (13 digits total) instead
 * of the usual 8-digit sequential number (12 digits total).
 */
export const NINE_DIGIT_FEDERATIVE_UNIONS = ["01", "02"] as const;

export const NINE_DIGIT_FEDERATIVE_UNION_CODES: readonly string[] = NINE_DIGIT_FEDERATIVE_UNIONS;
