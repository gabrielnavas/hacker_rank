def insert_insort(n, nums_list):
  set_uniques = set(nums_list)
  new_nums_list = list(set_uniques)
  new_nums_list.sort()
  if len(new_nums_list) > 1:
    return new_nums_list[len(new_nums_list)-2]
  return new_nums_list[0]


if __name__ == '__main__':
    n = int(input())
    arr = [n for n in map(int, input().split())]
    runner_up_index = insert_insort(n, arr)
    print(runner_up_index)
