"""
input tests
5
Harsh
20
Beria
20
Varun
19
Kakunami
19
Vikas
21


expected
Beria
Harsh
"""

if __name__ == '__main__':
    lst = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        lst.append([name, score])
    lst.sort(key=lambda elem: elem[1])
    secondElement = lst[0]
    for elem in lst:
      if elem[1] > secondElement[1]:
        secondElement = elem
        break
    lstMoreTwo = []
    for elem in lst:
        if elem[1] == secondElement[1]:
            lstMoreTwo.append(elem)
    if len(lstMoreTwo) > 1:
        lstMoreTwo.sort(key=lambda elem: elem[0])
        for elem in lstMoreTwo:
            print(elem[0])
    else:
        print(secondElement[0])