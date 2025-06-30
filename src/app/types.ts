export enum FormElSize {
	DEFAULT = 'default',
	SMALL = 'small',
	LARGE = 'large',
}

export enum ThemeColor {
	PURPLE = 'purple',
	BLUE = 'blue',
}

export interface Friend {
	name: string;
	status: string;
	gender: 'male' | 'female';
}
