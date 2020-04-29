const MAX_LENGTH = 22;

export const handleNameLength = (string) => {
	if (string == null) return;
	if (string.length >= MAX_LENGTH) return `${string.slice(0, MAX_LENGTH)}...`;
	return string;
};
