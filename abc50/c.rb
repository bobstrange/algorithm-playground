#!/usr/bin/env ruby

n = gets.to_i
abs_list = gets.split(' ').map(&:to_i)

# n = 5
# abs_list = [2, 4, 4, 0, 2]

# n = 7
# abs_list = [6, 4, 0, 2, 4, 0, 2]

# n = 8
# abs_list = '7 5 1 1 7 3 5 3'.split(" ").map(&:to_i)

# n = 9
# abs_list = '8 8 6 6 4 4 2 2 0'.split(" ").map(&:to_i)

sorted_abs_list = abs_list.sort

expected_list = (1..n).select { |d|
  if n.odd?
    (d % 2).even?
  else
    (d % 2).odd?
  end
}

expected_list += expected_list
sorted_abs_list -= [0]
sorted_expected_list = expected_list.sort

mod = 10 ** 9 + 7
if sorted_abs_list == sorted_expected_list
  print("#{2 ** (n / 2) % mod}\n")
else
  print "0\n"
end
