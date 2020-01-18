#!/usr/bin/env ruby

n = gets.to_i
abs_list = gets.split(' ').map(&:to_i)

# n = 5
# abs_list = [2, 4, 4, 0, 2]

# n = 7
# abs_list = [6, 4, 0, 2, 4, 0, 2]

# n = 8
# abs_list = '7 5 1 1 7 3 5 3'.split(" ").map(&:to_i)

grouped_abs_list = abs_list.group_by { |i| i }

expected_list = (0..n).select { |d|
  if n.odd?
    (d % 2).even?
  else
    (d % 2).odd?
  end
}.map { |d|
  if d == 0
    [d, 1]
  else
    [d, 2]
  end
}.to_h

if grouped_abs_list.map { |k, v| [k, v.size] }.to_h == expected_list
  print("#{if n.odd?
    2 ** (grouped_abs_list.size - 1)
  else
    2 ** grouped_abs_list.size
  end}\n")
else
  print "0\n"
end
