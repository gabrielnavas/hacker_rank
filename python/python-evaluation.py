n = input()
replace_n = n.replace('print(', '')
just_calc = replace_n[:-1]
print(eval(just_calc))