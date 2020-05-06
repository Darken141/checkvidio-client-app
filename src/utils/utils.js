export const handleCustomTime = (min, sec) => {
	let time = Number(min) * 60;
	time = time + Number(sec);
	return time;
};
