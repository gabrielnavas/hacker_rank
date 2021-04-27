from collections import Counter

X = int(input())
collection = Counter(list(map(int, input().split(' '))))
N = int(input())

keys = list(collection.keys())
values = list(collection.values())
amount_sum = 0

while N > 0:
	pair = list(map(int, input().split(' ')))
	
	try:
		index = keys.index(pair[0])
		if index >= 0 and values[index] > 0:
			amount_sum += pair[1]
			values[index] -= 1
	except:
		pass
	N -= 1

print(amount_sum)