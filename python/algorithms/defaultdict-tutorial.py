from collections import defaultdict

d = defaultdict(list)

group_a, group_b = map(int, input().split(' '))

while group_a > 0: 
	n = input()
	d['group_a'].append(n)
	group_a -= 1

while group_b > 0: 
	n = input()
	d['group_b'].append(n)
	group_b -= 1

for n_group_b in d['group_b']:
	found_b_in_a = False
	for index, n_group_a in enumerate(d['group_a']):
		if n_group_a == n_group_b:
			print(index + 1, end=' ')
			found_b_in_a = True
	if not found_b_in_a:
		print(-1)
	else: 
		print('')

# 5 2
# a
# a
# b
# a
# b
# a
# b