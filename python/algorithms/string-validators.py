def isalnum(s):
	for ch in s:
		if ch.isalnum():
			return True
	return False

def isalpha(s):
	for ch in s:
		if ch.isalpha():
			return True
	return False

def isdigit(s):
	for ch in s:
		if ch.isdigit():
			return True
	return False

def islower(s):
	for ch in s:
		if ch.islower():
			return True
	return False

def isupper(s):
	for ch in s:
		if ch.isupper():
			return True
	return False

if __name__ == '__main__':
    s = input()
    print(isalnum(s))
    print(isalpha(s))
    print(isdigit(s))
    print(islower(s))
    print(isupper(s))