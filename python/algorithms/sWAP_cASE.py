def swap_case(s):
    def transforn_character(chr: str):
      if chr.islower():
        return chr.upper()
      else: return chr.lower()
    return ''.join(list(map(transforn_character, s)))

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)