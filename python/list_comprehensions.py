def resolve(x,y,z,n):
  lst = []

  i,j,k = 0,0,0
  while i <= x and j <= y and k <= z:
    i = 0
    while i <= x:
      j = 0
      while j <= y:
        k=0
        while k <= z:
          lst.append([i,j,k])
          k+=1
        j+=1
      i+=1
  return [l for l in filter(lambda l: sum(l) != n, lst)]
  

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    print(resolve(x,y,z,n))