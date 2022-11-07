export const v = "v0.0.1";

export const SUFFIX_LENGTH = 3;

export const MIN_CURRENCY_ID_LENGTH = 3;
export const MAX_CURRENCY_ID_LENGTH = 10;

export const MIN_CONTRACT_ID_LENGTH = 3;
export const MAX_CONTRACT_ID_LENGTH = 10;

export const MIN_SEED_LENGTH = 36;

export const MIN_THRESHOLD = 1;
export const MAX_THRESHOLD = 100;
export const MIN_WEIGHT = 1;
export const MAX_WEIGHT = 100;

export const MAX_KEYS_IN_ADDRESS = 10;
export const MAX_AMOUNTS_IN_ITEM = 10;
export const MAX_ITEMS_IN_FACT = 10;

export const TEST_NODE = {
	url: "http://127.0.0.1:54320",
	builder: "/builder/send",
	lookup: "/block/operation/",
};
export const TEST_GENESIS = {
	ecdsa: {
		key: "KzFERQKNQbPA8cdsX5tCiCZvR4KgBou41cgtPk69XueFbaEjrczbmpr",
		address: "DBa8N5of7LZkx8ngH4mVbQmQ2NHDd6gL2mScGfhAEqddmca",
	},
	schnorr: {
		key: "",
		address: "",
	},
};