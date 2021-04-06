def count_substring(string, sub_string):
    count=0
    len_sub_string=len(sub_string)
    index_str_initital=0
    for index_end in range(len_sub_string, len(string)+1):
      index_str_found = string.find(
          sub_string, 
          index_str_initital, 
          index_end
      )
      if index_str_found >= 0:
        end_len = index_str_found+len_sub_string
        bit_chars = string[index_str_found:end_len] 
        if bit_chars == sub_string:
          count += 1
      index_str_initital += 1
    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)