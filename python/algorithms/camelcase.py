def camelcase(s):
	if len(s) == 0: return 0
	count = 0
	for chr in s:
		if chr.isupper():
			count += 1
	return count + 1