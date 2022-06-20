export interface Planets {
	count: number;
	next: string | null;
	previous?: string | null;
	results: Array<Object>
}