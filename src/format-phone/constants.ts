export type NationalMask = "sn" | "nanp";

export const LENGTH: Record<NationalMask, number> = {
	sn: 9,
	nanp: 11,
};

export const MASK: Record<NationalMask, string> = {
	sn: "00000-0000",
	nanp: "(00) 00000-0000",
};

export const INTERNATIONAL_PREFIX = "+55";

export const INTERNATIONAL_MASK = {
	landline: "00 0000-0000",
	mobile: "00 00000-0000",
};

export const SERVICE_MASK = {
	abbreviated: "0000-0000",
	nonGeographic: "0000 000 0000",
};
