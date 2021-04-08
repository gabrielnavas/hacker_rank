#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    nm = input().split()

    n = int(nm[0])

    m = int(nm[1])

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    k = int(input())
    
    arr.sort(key=lambda i_arr: i_arr[k])
    
    for item_arr in arr:
        arrStr = list(map(str, item_arr))
        print(' '.join(arrStr))

