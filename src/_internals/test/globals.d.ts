declare const Deno: {
	readonly env: {
		get(key: string): string | undefined;
	};
	readonly test: (options: {
		name: string;
		fn: () => void | Promise<void>;
		ignore?: boolean;
		sanitizeOps?: boolean;
		sanitizeResources?: boolean;
		sanitizeExit?: boolean;
	}) => void;
};

declare global {
	var RUN_LIVE_CEP_TESTS: string | number | undefined;
	interface GlobalThis {
		RUN_LIVE_CEP_TESTS?: string | number;
	}
}

declare module "bun:test" {
	export const describe: any;
	export const it: any;
	export const expect: any;
	export const test: any;
	export const beforeEach: any;
	export const afterEach: any;
	export const jest: any;
}
